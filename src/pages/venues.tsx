import * as React from 'react';
import { graphql } from 'gatsby';
import TablePage from '../templates/TablePage';
import { Edge, LocationWithState, createInitialAppState } from '../types';

interface Props {
  data: {
    allVenuesJson: {
      edges: Edge[];
    };
  };
  location: LocationWithState;
}

class Venues extends React.PureComponent<Props> {
  render() {
    //console.log(this.props);
    const { data, location } = this.props;
    const appState = createInitialAppState(location);

    return <TablePage group="venues" edges={data.allVenuesJson.edges} appState={appState} />;
  }
}

export default Venues;

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
            club
            category
            shortname
            slug
            radius1000
            radius3000
            radius5000
            radius10000
          }
        }
      }
    }
  }
`;
