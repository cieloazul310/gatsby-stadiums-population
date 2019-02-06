import * as React from 'react';
import { graphql } from 'gatsby';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withRoot from '../utils/withRoot';
import TableApp from '../components/TableApp';
import { VenueEdge, LocationWithState, AppState, initialAppState } from '../utils/types';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      textAlign: 'center',
      width: '100%'
    },
    content: {
      paddingTop: 56
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: {
    allVenuesJson: {
      edges: Array<VenueEdge>;
    };
  };
  location: LocationWithState;
}

class IndexPage extends React.PureComponent<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar>
          <ToolBar>
            <Typography variant="h6" color="inherit">
              スタジアムと距離圏人口
            </Typography>
          </ToolBar>
        </AppBar>
        <div className={classes.content}>
          <TableApp
            title="スタジアムと距離圏人口"
            data={this.props.data.allVenuesJson.edges}
            appState={this.props.location.state || initialAppState}
          />
        </div>
      </div>
    );
  }
}
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
