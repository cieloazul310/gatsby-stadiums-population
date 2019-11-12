import * as React from 'react';
import classNames from 'classnames';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: '1',
      paddingLeft: theme.spacing(1),
      textAlign: 'left',
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(2)
      }
    }
  })
);

interface Props {
  className?: string;
  children: JSX.Element | (JSX.Element | string)[] | string;
}

function FlexTd({ className, children }: Props) {
  const classes = useStyles({});
  return <div className={classNames(classes.root, className)}>{children}</div>;
}
export default FlexTd;
