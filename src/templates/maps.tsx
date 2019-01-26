import * as React from 'react';
import { graphql, navigate } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { AutoSizer } from 'react-virtualized';
import { feature as topofeature } from 'topojson-client';
import { Topology } from 'topojson-specification';

import circle from '@turf/circle';
import center from '@turf/center';
import MapApp from '../components/MapApp';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {},
    apptitle: {
      flexGrow: 1
    },
    autoSizerWrapper: {
      height: 'calc(100vh - 56px)'
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: {
    topojsonJson: Topology;
  };
}

const MapPage: React.FunctionComponent<Props> = (props: Props) => {
  const { classes, data } = props;
  const geojson = topofeature(data.topojsonJson, data.topojsonJson.objects.radius5000);
  const buffer = geojson.features.filter(feature => feature.geometry.type === 'Polygon')[0];
  const bufferLarge = circle(center(buffer), 10, {
    units: 'kilometers'
  });
  console.log(bufferLarge);
  const { name } = buffer.properties;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <ToolBar>
          <Typography color="inherit" className={classes.apptitle} variant="h6">
            {name}
          </Typography>
          <IconButton
            aria-owns="next"
            aria-haspopup="true"
            onClick={() => {
              const next = Math.round(Math.random() * 101);
              navigate(`/${next.toString()}/`);
            }}
            color="inherit"
          >
            <ArrowForward />
          </IconButton>
        </ToolBar>
      </AppBar>
      <div className={classes.autoSizerWrapper}>
        <AutoSizer>{({ width, height }) => <MapApp width={width} height={height} geojson={geojson} feature={buffer} />}</AutoSizer>
      </div>
      <div>
        <Typography variant="h4">{name}</Typography>
      </div>
    </div>
  );
};

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
              name
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
