import * as React from 'react';
import { graphql, Link } from 'gatsby';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      padding: theme.spacing.unit * 2
    },
    content: {
      padding: `${theme.spacing.unit * 4}px 0`,
      maxWidth: 800
    },
    title: {
      padding: `${theme.spacing.unit * 10}px 0`
    },
    football: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      borderBottom: `4px solid rgba(255, 255, 255, 0)`,
      transition: '.25s linear',
      '&:hover': {
        borderBottom: `4px solid ${theme.palette.primary.main}`
      }
    },
    basketball: {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
      borderBottom: `4px solid rgba(255, 255, 255, 0)`,
      transition: '.25s linear',
      '&:hover': {
        borderBottom: `4px solid ${theme.palette.secondary.main}`
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: {
    allVenuesJson: {
      totalCount: number;
    };
    allArenasJson: {
      totalCount: number;
    };
  };
}

const IndexPage: React.FC<Props> = ({ classes, data }: Props) => (
  <div className={classes.root}>
    <CssBaseline />
    <div className={classes.content}>
      <Typography variant="h4" component="h1" gutterBottom align="center" className={classes.title}>
        人口地図置き場
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="right">
        <Link to="venues" className={classes.football}>
          {data.allVenuesJson.totalCount} サッカースタジアム
        </Link>
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="right">
        <Link to="arenas" className={classes.basketball}>
          {data.allArenasJson.totalCount} バスケットボールアリーナ
        </Link>
      </Typography>
    </div>
  </div>
);

export default withStyles(styles)(IndexPage);

export const query = graphql`
  {
    allVenuesJson {
      totalCount
    }
    allArenasJson {
      totalCount
    }
  }
`;
