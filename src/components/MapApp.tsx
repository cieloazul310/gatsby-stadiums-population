import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
const d3tile = require('d3-tile').tile;

import LinearProgress from '@material-ui/core/LinearProgress';
import bbox from '@turf/bbox';
import { geoMercator, geoPath, GeoProjection, GeoPath } from 'd3-geo';
import TileSet, { Tile, TileWithURL } from '../utils/tileTree';
import MeshFeature from '../components/MeshFeature';
import GrayScaleFilter from '../components/GrayScaleFilter';
import { Feature, Point } from '@turf/helpers';
import { Buffer, MeshProperties, MapState } from '../utils/types';

import Place from '../image/place.svg';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {},
    buffer: {
      opacity: 0.2,
      '&:hover': {
        opacity: 1
      }
    },
    bufferText: { fontSize: '80%', fontFamily: 'sans-serif', fontWeight: 'bold' },
    progress: {
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0
    },
    points: {
      mixBlendMode: 'multiply'
    }
  });

interface D3TileArray<T> extends Array<T> {
  scale: number;
  translate: [number, number];
}

interface Props extends WithStyles<typeof styles> {
  width: number;
  height: number;
  mapState: MapState;
  geojson: {
    type: 'FeatureCollection';
    features: Feature<Point, MeshProperties>[];
  };
  buffers: Buffer[];
}

interface State {
  readonly fetchStatus?: 'yet' | 'fetching' | 'fetched';
}

class Map extends React.Component<Props, State> {
  readonly state: State = {
    fetchStatus: 'yet'
  };
  private _tileSet = new TileSet();
  private _terrain = new TileSet({
    url: '//cyberjapandata.gsi.go.jp/xyz/slopemap/{z}/{x}/{y}.png'
  });
  // Tile Maps
  // slope: //cyberjapandata.gsi.go.jp/xyz/slopemap/{z}/{x}/{y}.png

  private _getTileCoordinates = (projection: GeoProjection, maxZoom: number = 20): Tile[] => {
    const { width, height } = this.props;
    let mag: number = 1.5;

    const zoomer = Math.log2((projection.scale() * 2 * mag * Math.PI) / 256);
    // required zoom level > maxZoom
    if (zoomer >= maxZoom + 0.5) {
      mag = Math.pow(2, maxZoom + 0.5 - zoomer);
    }

    const tiles: Tile[] = d3tile()
      .size([width * mag, height * mag])
      .scale(projection.scale() * 2 * Math.PI * mag)
      .translate(projection([0, 0]).map(v => v * mag))()
      .map((tile: { x: number; y: number; z: number }, index: number, array: D3TileArray<Tile>) => ({
        ...tile,
        mag,
        id: `${tile.z}/${tile.x}/${tile.y}`,
        scale: array.scale,
        translate: array.translate
      }));

    return tiles;
  };

  private _fetchTiles = (tiles: Tile[], tileSet: TileSet) => {
    return tileSet.updateTiles(tiles);
  };

  componentDidMount() {}

  public render() {
    const { classes, buffers, geojson, mapState } = this.props;
    const { popVisibility, bufferVisibility, zoomLevel, terrain } = mapState;
    const width = this.props.width || 400;
    const height = this.props.height || 400;
    const projection = buffers ? geoMercator().fitExtent([[10, 40], [width - 10, height - 40]], buffers[zoomLevel]) : geoMercator();

    const path: GeoPath = geoPath(projection);
    const tileSet = !terrain ? this._tileSet : this._terrain;
    const tileCoords = !terrain ? this._getTileCoordinates(projection) : this._getTileCoordinates(projection, 15);

    let renderTiles: TileWithURL[] = tileSet.setTileUrlFromTree(tileCoords);
    let hoge = null;
    if (tileSet.isRequireFetch(tileCoords)) {
      hoge = <LinearProgress className={classes.progress} color="secondary" />;
      this._fetchTiles(tileCoords, tileSet).then(() => {
        this.setState({ fetchStatus: 'fetched' });
      });
    }

    return (
      <div className={classes.root}>
        <svg width={width} height={height}>
          <g>
            <GrayScaleFilter id="grayscale" />
            <g filter="url(#grayscale)" className={classes.tiles} style={{ opacity: this.state.fetchStatus !== 'fetching' ? 1 : 0 }}>
              {renderTiles.map((tile, index) => (
                <image
                  key={index}
                  xlinkHref={tile.url}
                  x={((tile.x + tile.translate[0]) * tile.scale) / tile.mag}
                  y={((tile.y + tile.translate[1]) * tile.scale) / tile.mag}
                  width={tile.scale / tile.mag}
                  height={tile.scale / tile.mag}
                  imageRendering="optimizeQuality"
                />
              ))}
            </g>
          </g>
          {popVisibility ? (
            <g className={classes.points} style={{ opacity: this.state.fetchStatus !== 'yet' ? 1 : 0 }}>
              {geojson
                ? geojson.features.map((feature, index) =>
                    feature.geometry.type === 'Point' ? <MeshFeature key={index} feature={feature} projection={projection} /> : null
                  )
                : null}
            </g>
          ) : null}
          {bufferVisibility ? (
            <g>
              {buffers
                ? buffers.map((feature, index) => {
                    const bb = bbox(feature);
                    const lb = projection([bb[2] + (bb[0] - bb[2]) / 2, bb[1]]);
                    return (
                      <g key={index} className={classes.buffer}>
                        <path d={path(feature) || undefined} fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth={12} />
                        <path d={path(feature) || undefined} fill="none" stroke="rgb(200, 60, 80)" strokeWidth={3} />
                        <text className={classes.bufferText} x={lb[0]} y={lb[1]} dy="1em" textAnchor="middle" fill="rgb(200, 60, 80)">
                          {feature.properties.radius}
                        </text>
                      </g>
                    );
                  })
                : null}
            </g>
          ) : null}
          <g>
            <image xlinkHref={Place} x={width / 2} y={height / 2} width={28} height={28} transform="translate(-14, -26)" />
          </g>
        </svg>
        {hoge || null}
      </div>
    );
  }
}

export default withStyles(styles)(Map);
