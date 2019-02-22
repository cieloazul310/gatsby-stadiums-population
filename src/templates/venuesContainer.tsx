import * as React from 'react';
import { graphql } from 'gatsby';
import MapPage from './MapPage';
import { LocationWithState, Edge, Data, createInitialAppState } from '../types';

interface Props {
  data: {
    allVenuesJson: {
      edges: Edge[];
    };
    venuesJson: Data;
  };
  location: LocationWithState;
  pageContext: {
    slug: string;
    group: 'venues' | 'arenas';
  };
}

class MapContainer extends React.PureComponent<Props> {
  public render() {
    console.log(this.props);
    const { data, location, pageContext } = this.props;
    const appState = createInitialAppState(location);

    return <MapPage datum={data.venuesJson} edges={data.allVenuesJson.edges} appState={appState} group={pageContext.group} />;
  }
}

export default MapContainer;

export const query = graphql`
  query($slug: String) {
    allVenuesJson {
      edges {
        node {
          fields {
            slug
          }
          summary {
            slug
            name
            club
            shortname
            category
            radius1000
            radius3000
            radius5000
            radius10000
          }
        }
      }
    }
    venuesJson(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      summary {
        name
        club
        shortname
        category
        radius1000
        radius3000
        radius5000
        radius10000
        slug
      }
      topojson {
        type
        transform {
          scale
          translate
        }
        objects {
          points {
            type
            geometries {
              type
              coordinates
              properties {
                id
                val
              }
            }
          }
          buffers {
            type
            geometries {
              type
              arcs
              properties {
                radius
                population
                north
                northeast
                east
                southeast
                south
                southwest
                west
                northwest
              }
            }
          }
        }
        arcs
      }
    }
  }
`;
