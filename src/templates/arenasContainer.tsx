import * as React from 'react';
import { graphql } from 'gatsby';
import MapPage from '../components/MapPage';
import { LocationWithState, Edge, Data, initialAppState } from '../types';

interface Props {
  data: {
    allArenasJson: {
      edges: Edge[];
    };
    arenasJson: Data;
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
    const appState = location.state === null || location.state.appState === undefined ? initialAppState : location.state.appState;

    return <MapPage datum={data.arenasJson} edges={data.allArenasJson.edges} appState={appState} group={pageContext.group} />;
  }
}

export default MapContainer;

export const query = graphql`
  query($slug: String) {
    allArenasJson {
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
    arenasJson(fields: { slug: { eq: $slug } }) {
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
