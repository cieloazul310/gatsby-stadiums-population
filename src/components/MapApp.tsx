import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
const d3tile = require('d3-tile').tile;

import { geoMercator, geoPath, GeoProjection, GeoPath, ExtendedFeature } from 'd3-geo';
import TileSet, { Tile, TileWithURL } from '../utils/tileTree';
import MeshFeature from '../components/MeshFeature';
import GrayScaleFilter from '../components/GrayScaleFilter';
import { GeoJSONObject } from '@turf/helpers';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {},
    buffer: {
      fill: 'none',
      stroke: theme.palette.primary.main,
      strokeWidth: 2
    }
  });

interface D3TileArray<T> extends Array<T> {
  scale: number;
  translate: [number, number];
}

interface Props extends WithStyles<typeof styles> {
  width: number;
  height: number;
  geojson?: GeoJSONObject;
  feature?: ExtendedFeature;
}

interface State {
  readonly fetchStatus?: 'yet' | 'fetching' | 'fetched';
}

class Map extends React.Component<Props, State> {
  readonly state: State = {
    fetchStatus: 'yet'
  };
  _projection: GeoProjection = geoMercator();
  _tileSet = new TileSet();

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

  componentDidMount() {
    console.log('Component Did Mount');
    console.log(this.props.geojson);
  }

  public render() {
    console.log('Render');
    const { classes, width, height, feature, geojson } = this.props;
    //const { tiles } = this.state;
    const projection = geoMercator().fitExtent([[20, 20], [width - 20, height - 20]], feature);
    const path: GeoPath = geoPath(projection);
    const tileCoords = this._getTileCoordinates(projection);

    console.log(tileCoords);
    console.log(projection.scale());

    let renderTiles: TileWithURL[] = this._tileSet.setTileUrlFromTree(tileCoords);

    if (this._tileSet.isRequireFetch(tileCoords) /*tiles.length !== tileCoords.length*/) {
      console.log('Fetch Tiles Starts');
      this._fetchTiles(tileCoords).then(newTiles => {
        this.setState({ fetchStatus: 'fetched' });
        console.log('Fetch Tiles Ends');
        console.log(newTiles);
      });
    }

    return (
      <svg className={classes.root} width={width} height={height}>
        <g>
          <GrayScaleFilter id="grayscale" />
          <g filter="url(#grayscale)">
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
        <path className={classes.buffer} d={path(feature) || undefined} />
        <g>
          {geojson.features.map((ftr, index) =>
            ftr.geometry.type === 'Point' ? <MeshFeature key={index} feature={ftr} projection={projection} /> : null
          )}
        </g>
      </svg>
    );
  }
}

export default withStyles(styles)(Map);
