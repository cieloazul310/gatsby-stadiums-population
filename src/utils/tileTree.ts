import fetch from 'isomorphic-fetch';

export interface Tile {
  id: string;
  x: number;
  y: number;
  z: number;
  tx: number;
  ty: number;
  scale: number;
  translate: [number, number];
  mag: number;
}

type TileUrl = string | undefined;

export interface TileWithURL extends Tile {
  url: TileUrl;
}

export interface TileTree {
  [key: string]: {
    [key: string]: {
      [key: string]: TileUrl;
    };
  };
}

interface TileSetOptions {
  url?: string;
  maxZoom?: number;
  minZoom?: number;
}

class TileSet {
  readonly tileTree: TileTree;
  readonly maxZoom: number;
  readonly minZoom: number;
  readonly tileUrl: string;
  constructor(options: TileSetOptions = {}) {
    this.tileUrl = options.url || '//cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png';
    this.maxZoom = options.maxZoom || 20;
    this.minZoom = options.maxZoom || 2;
    this.tileTree = {};
  }

  private treeIncludesTile(tile: Tile): boolean {
    const { x, y, z } = tile;
    return (
      this.tileTree.hasOwnProperty(z.toString()) &&
      this.tileTree[z.toString()].hasOwnProperty(x.toString()) &&
      this.tileTree[z.toString()][x.toString()].hasOwnProperty(y.toString())
    );
  }

  private tile2tree(tile: TileWithURL) {
    const { x, y, z, url } = tile;
    if (!this.tileTree.hasOwnProperty(z.toString())) {
      this.tileTree[z.toString()] = {
        [x.toString()]: {
          [y.toString()]: url
        }
      };
    } else if (!this.tileTree[z.toString()].hasOwnProperty(x.toString())) {
      this.tileTree[z.toString()][x.toString()] = {
        [y.toString()]: url
      };
    } else {
      this.tileTree[z.toString()][x.toString()][y.toString()] = url;
    }
  }
  // fetch new tiles
  private fetchTiles(tiles: Tile[]): Promise<TileWithURL[]> {
    return new Promise(resolve => {
      const tasks = tiles.map(tile => this.fetchTile(tile, this.tileUrl));
      Promise.all(tasks).then((data: TileWithURL[]) => {
        resolve(data);
      });
    });
  }
  private fetchTile(tile: Tile, url: string): Promise<TileWithURL> {
    const { x, y, z } = tile;
    const fetchUrl = url.replace('{z}/{x}/{y}', `${z}/${x}/${y}`);

    return fetch(fetchUrl)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.blob();
      })
      .then(blob => {
        const tileWithURL: TileWithURL = {
          ...tile,
          url: URL.createObjectURL(blob)
        };
        this.tile2tree(tileWithURL);
        return tileWithURL;
      })
      .catch(() => {
        const tileWithURL: TileWithURL = {
          ...tile,
          url: undefined
        };
        this.tile2tree(tileWithURL);
        return tileWithURL;
      });
  }

  // helpers

  public isRequireFetch(tiles: Tile[]): boolean {
    return !tiles.every(tile => this.treeIncludesTile(tile));
  }

  public setTileUrlFromTree(tiles: Tile[]): TileWithURL[] {
    return tiles
      .filter(tile => this.treeIncludesTile(tile))
      .map(tile => ({
        ...tile,
        url: this.tileTree[tile.z][tile.x][tile.y]
      }));
  }

  public async updateTiles(newTiles: Tile[]) {
    const tilesInTree = this.setTileUrlFromTree(newTiles.filter(tile => this.treeIncludesTile(tile)));

    const tilesShouldFetch = newTiles.filter(tile => !this.treeIncludesTile(tile));

    const fetchedTiles: TileWithURL[] = await this.fetchTiles(tilesShouldFetch);

    return [...tilesInTree, ...fetchedTiles];
  }
}

export default TileSet;
