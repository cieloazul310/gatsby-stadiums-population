import * as React from 'react';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Typography from '@material-ui/core/Typography';
//import Grid from "@material-ui/core/Grid";
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import Layout from '../layouts/Layout';
import withRoot from '../utils/withRoot';
import TableApp from '../components/TableApp';
//import SimpleCounterApp from '../components/SimpleCounterApp';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      textAlign: 'center',
      width: '100%',
      padding: '1em'
    }
  });

type Props = WithStyles<typeof styles>;

const IndexPage: React.FunctionComponent<Props> = (props: Props) => (
  <Layout>
    <Typography variant="body1">
      <Link to="/MapPage/">Go to page 2</Link>
    </Typography>
    <Button
      onClick={() => {
        console.log('Pushed!');
      }}
      color="primary"
    >
      Push!
    </Button>
    <TableApp title="スタジアムと距離圏人口" />
  </Layout>
);

export default withRoot(withStyles(styles)(IndexPage));
