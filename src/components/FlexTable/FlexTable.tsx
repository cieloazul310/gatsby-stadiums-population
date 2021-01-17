import * as React from 'react';
import classNames from 'classnames';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: theme.typography.body2.fontSize,
      padding: `${theme.spacing(1)}px 0`,
    },
  })
);

interface Props {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

function FlexTable({ className, children }: Props) {
  const classes = useStyles({});
  return <div className={classNames(classes.root, className)}>{children}</div>;
}

export default FlexTable;
