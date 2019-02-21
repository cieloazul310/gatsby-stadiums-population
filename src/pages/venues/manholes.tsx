import * as React from 'react';
import { graphql } from 'gatsby';

import Manholes from '../../components/Manholes';
import { EdgeWithBuffer, LocationWithState, initialAppState } from '../../types';

interface Props {
  data: {
    allVenuesJson: {
      edges: EdgeWithBuffer[];
    };
  };
  location: LocationWithState;
}

class VenueManholes extends React.PureComponent<Props> {
  render() {
    console.log(this.props);
    const { data, location } = this.props;
    const appState = location.state === null || location.state.appState === undefined ? initialAppState : location.state.appState;
    return <Manholes edges={data.allVenuesJson.edges} group="venues" appState={appState} />;
  }
}

export default VenueManholes;

export const query = graphql`
  {
    allVenuesJson {
      edges {
        node {
          fields {
            slug
          }
          summary {
            name
            shortname
            category
            slug
            radius1000
            radius3000
            radius5000
            radius10000
          }
          topojson {
            objects {
              buffers {
                geometries {
                  properties {
                    name
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
          }
        }
      }
    }
  }
`;
