import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: theme.typography.fontFamily,
      width: '100%',
      maxWidth: 800,
      margin: 'auto',
      padding: theme.spacing(2),
      '@global': {
        blockquote: {
          backgroundColor: '#f3f3f3',
          margin: `${theme.spacing(2)}px auto`,
          padding: theme.spacing(2),
          borderLeft: 'solid 4px #ddd',
          borderRadius: '8px',
        },
      },
    },
  })
);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

function Container({ children }: Props) {
  const classes = useStyles({});
  return <div className={classes.root}>{children}</div>;
}

export default Container;
