import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
      color: 'white'
    },
    inner: {
      display: 'flex',
      padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 1}px`,
      justifyContent: 'center',
      justifyItems: 'center'
    }
  });

type Props = WithStyles<typeof styles>;

const Footer: React.FC<Props> = ({ classes }: Props) => (
  <div className={classes.root}>
    <footer>
      <div className={classes.inner}>
        <Typography variant="body2" color="inherit">
          Copyright © 2019 cieloazul310 All rights reserved.
        </Typography>
      </div>
    </footer>
  </div>
);

export default withStyles(styles)(Footer);
