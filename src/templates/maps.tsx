import * as React from 'react';
import { graphql, Link, navigate } from 'gatsby';
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

import MapApp from '../components/MapApp';
import BufferArcs from '../components/BuffersArcs';
import { Summary } from '../utils/types';
import withRoot from '../utils/withRoot';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {},
    apptitle: {
      flexGrow: 1
    },
    autoSizerWrapper: {
      height: 'calc(100vh - 56px)'
    },
    description: {
      maxWidth: 800,
      margin: 'auto',
      padding: '1em'
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: {
    allVenuesJson: {
      edges: Array<{
        node: {
          summary: {
            slug: string;
          };
        };
      }>;
    };
    venuesJson: {
      fields: {
        slug: string;
      };
      summary: Summary;
      topojson: Topology;
    };
  };
}

const MapPage: React.FunctionComponent<Props> = (props: Props) => {
  const { classes, data } = props;
  const { edges } = data.allVenuesJson;
  const { summary, topojson } = data.venuesJson;
  const geojson = topofeature(topojson, topojson.objects.points);
  const buffers = topofeature(topojson, topojson.objects.buffers).features;

  const { name, radius1000, radius3000, radius5000, radius10000 } = summary;

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
              const slugs = edges.map(edge => edge.node.summary.slug);
              const next = slugs[Math.round(Math.random() * slugs.length)];
              navigate(`/${next}/`);
            }}
            color="inherit"
          >
            <ArrowForward />
          </IconButton>
        </ToolBar>
      </AppBar>
      <div className={classes.autoSizerWrapper}>
        <AutoSizer>{({ width, height }) => <MapApp width={width} height={height} geojson={geojson} buffers={buffers} />}</AutoSizer>
      </div>
      <div className={classes.description}>
        <Typography variant="h4">{name}</Typography>
        <div>
          <BufferArcs buffers={buffers} />
        </div>
        <ul>
          <li>{`1km: ${radius1000}`}</li>
          <li>{`3km: ${radius3000}`}</li>
          <li>{`5km: ${radius5000}`}</li>
          <li>{`10km: ${radius10000}`}</li>
        </ul>
        <Link to="/">トップに戻る</Link>
      </div>
    </div>
  );
};

export default withRoot(withStyles(styles)(MapPage));

// helper
export const query = graphql`
  query($slug: String!) {
    allVenuesJson {
      edges {
        node {
          summary {
            slug
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
        shortname
        category
        radius1000
        radius3000
        radius5000
        radius10000
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
