import * as React from 'react';
import { graphql } from 'gatsby';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import Layout from '../layouts/Layout';
import withRoot from '../utils/withRoot';
import TableApp from '../components/TableApp';
import { VenueEdge } from '../utils/types';
//import SimpleCounterApp from '../components/SimpleCounterApp';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      textAlign: 'center',
      width: '100%',
      padding: '1em'
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: {
    allVenuesJson: {
      edges: Array<VenueEdge>;
    };
  };
}

const IndexPage: React.FunctionComponent<Props> = (props: Props) => (
  <Layout>
    <TableApp title="スタジアムと距離圏人口" data={props.data.allVenuesJson.edges} />
  </Layout>
);

export default withRoot(withStyles(styles)(IndexPage));

export const query = graphql`
  {
    allVenuesJson {
      edges {
        node {
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
