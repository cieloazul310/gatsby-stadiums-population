import * as React from 'react';
import classNames from 'classnames';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignItems: 'start',
      },
    },
  })
);

interface Props {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

function FlexRow({ className, children }: Props) {
  const classes = useStyles({});
  return <div className={classNames(classes.root, className)}>{children}</div>;
}
export default FlexRow;
