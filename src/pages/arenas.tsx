import * as React from 'react';
import { graphql } from 'gatsby';
import TablePage from '../templates/TablePage';
import { Edge, LocationWithState, createInitialAppState } from '../types';

interface Props {
  data: {
    allArenasJson: {
      edges: Edge[];
    };
  };
  location: LocationWithState;
}

class Arenas extends React.PureComponent<Props> {
  render() {
    //console.log(this.props);
    const { data, location } = this.props;
    const appState = createInitialAppState(location);

    return <TablePage group="arenas" edges={data.allArenasJson.edges} appState={appState} />;
  }
}

export default Arenas;

export const query = graphql`
  {
    allArenasJson {
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
