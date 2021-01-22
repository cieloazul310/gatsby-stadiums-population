import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '6em',
      textAlign: 'right',
      fontWeight: 'bold',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        textAlign: 'left',
      },
    },
  })
);

interface Props {
  className?: string;
  children: JSX.Element | (JSX.Element | string)[] | string;
}

function FlexTh({ className, children }: Props) {
  const classes = useStyles({});
  return <div className={clsx(classes.root, className)}>{children}</div>;
}
export default FlexTh;
