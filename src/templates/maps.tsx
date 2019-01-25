import * as React from 'react';
import { graphql } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { AutoSizer } from 'react-virtualized';
import { feature as topofeature } from 'topojson-client';
import { Topology } from 'topojson-specification';

import circle from '@turf/circle';
import MapApp from '../components/MapApp';

const center = [140.46, 36.36];
const buffer = circle(center, 5000, {
  units: 'meters'
});

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {},
    autoSizerWrapper: {
      height: 'calc(100vh - 56px)'
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: {
    topojsonJson: Topology;
  };
}

const MapPage: React.FunctionComponent<Props> = (props: Props) => (
  <div className={props.classes.root}>
    <AppBar position="static">
      <ToolBar>
        <Typography variant="h6">Map Page</Typography>
      </ToolBar>
    </AppBar>
    <div className={props.classes.autoSizerWrapper}>
      <AutoSizer>
        {({ width, height }) => (
          <MapApp
            width={width}
            height={height}
            geojson={topofeature(props.data.topojsonJson, props.data.topojsonJson.objects.radius5000)}
            feature={
              topofeature(props.data.topojsonJson, props.data.topojsonJson.objects.radius5000).features.filter(
                feature => feature.geometry.type === 'Polygon'
              )[0]
            }
          />
        )}
      </AutoSizer>
    </div>
  </div>
);

export default withStyles(styles)(MapPage);

// helper
export const query = graphql`
  query($slug: String!) {
    topojsonJson(fields: { slug: { eq: $slug } }) {
      type
      objects {
        radius5000 {
          type
          geometries {
            type
            properties {
              id
              val
            }
            arcs
            coordinates
          }
        }
      }
      arcs
      transform {
        scale
        translate
      }
    }
  }
`;
