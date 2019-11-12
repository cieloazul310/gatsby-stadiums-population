import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
      color: 'white'
    },
    inner: {
      display: 'flex',
      padding: `${theme.spacing(4)}px ${theme.spacing(1)}px`,
      justifyContent: 'center',
      justifyItems: 'center'
    }
  })
);

function Footer() {
  const classes = useStyles({});
  return (
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
}

export default Footer;
