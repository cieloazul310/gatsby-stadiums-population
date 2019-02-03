export interface Summary {
  name: string;
  club: string;
  category: string;
  shortname: string;
  radius1000: number;
  radius3000: number;
  radius5000: number;
  radius10000: number;
}

export interface VenueEdge {
  node: {
    summary: Summary;
  };
}
