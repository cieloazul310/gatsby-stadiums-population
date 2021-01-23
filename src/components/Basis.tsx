import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    basis: {
      padding: theme.spacing(4, 0),
    },
  })
);

interface Props {
  children: React.ReactNode;
}

function Basis({ children }: Props) {
  const classes = useStyles();
  return <div className={classes.basis}>{children}</div>;
}

export default Basis;
