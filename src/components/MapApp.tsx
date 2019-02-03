import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
const d3tile = require('d3-tile').tile;

import { geoMercator, geoPath, GeoProjection, GeoPath } from 'd3-geo';
import TileSet, { Tile, TileWithURL } from '../utils/tileTree';
import MeshFeature from '../components/MeshFeature';
import GrayScaleFilter from '../components/GrayScaleFilter';
import { Feature, Point } from '@turf/helpers';
import { Buffer, MeshProperties } from '../utils/types';

import Place from '../image/place.svg';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {},
    tiles: {
      transition: 'opacity 1s'
    },
    buffer: {
      fill: 'none',
      stroke: theme.palette.primary.main,
      strokeWidth: 2
    },
    points: {
      transition: 'opacity 1s .5s'
    }
  });

interface D3TileArray<T> extends Array<T> {
  scale: number;
  translate: [number, number];
}

interface Props extends WithStyles<typeof styles> {
  width: number;
  height: number;
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
  _tileSet = new TileSet();
  // Tile Maps
  // slope: //cyberjapandata.gsi.go.jp/xyz/slopemap/{z}/{x}/{y}.png

  private _getTileCoordinates = (projection: GeoProjection): Tile[] => {
    const { width, height } = this.props;
    const mag: number = 1.5;

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

  private _fetchTiles = (tiles: Tile[]) => {
    return this._tileSet.updateTiles(tiles);
  };

  componentDidMount() {}

  public render() {
    const { classes, width, height, buffers, geojson } = this.props;
    const projection = buffers
      ? geoMercator().fitExtent([[10, 40], [width - 10, height - 40]], buffers[buffers.length - 1])
      : geoMercator();

    const path: GeoPath = geoPath(projection);
    const tileCoords = this._getTileCoordinates(projection);

    let renderTiles: TileWithURL[] = this._tileSet.setTileUrlFromTree(tileCoords);

    if (this._tileSet.isRequireFetch(tileCoords)) {
      this._fetchTiles(tileCoords).then(newTiles => {
        this.setState({ fetchStatus: 'fetched' });
      });
    }

    return (
      <svg className={classes.root} width={width} height={height}>
        <g>
          <GrayScaleFilter id="grayscale" />
          <g filter="url(#grayscale)" className={classes.tiles} style={{ opacity: this.state.fetchStatus === 'fetched' ? 1 : 0 }}>
            {renderTiles.map((tile, index) => (
              <image
                key={index}
                xlinkHref={tile.url}
                x={((tile.x + tile.translate[0]) * tile.scale) / tile.mag}
                y={((tile.y + tile.translate[1]) * tile.scale) / tile.mag}
                width={tile.scale / tile.mag}
                height={tile.scale / tile.mag}
              />
            ))}
          </g>
        </g>
        <g>
          {buffers
            ? buffers.map((feature, index) => (
                <path key={index} d={path(feature)} fill="none" stroke="rgba(200, 60, 80, 0.2)" strokeWidth={3} />
              ))
            : null}
        </g>
        <g className={classes.points} style={{ opacity: this.state.fetchStatus === 'fetched' ? 1 : 0 }}>
          {geojson
            ? geojson.features.map((feature, index) =>
                feature.geometry.type === 'Point' ? <MeshFeature key={index} feature={feature} projection={projection} /> : null
              )
            : null}
        </g>
        <g>
          <image xlinkHref={Place} x={width / 2} y={height / 2} width={28} height={28} transform="translate(-14, -26)" />
        </g>
      </svg>
    );
  }
}

export default withStyles(styles)(Map);
