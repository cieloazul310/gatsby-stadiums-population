declare module '*/stadiums.json' {
  interface Feature {
    type: string;
    geometry: object;
    properties: object;
  }

  interface GeoJSON {
    type: string;
    features: Feature[];
  }
  const value: GeoJSON;
  export = value;
}
