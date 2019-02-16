import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      fontFamily: theme.typography.fontFamily,
      width: '100%',
      maxWidth: 800,
      margin: 'auto',
      padding: theme.spacing.unit * 2,
      '@global': {
        blockquote: {
          backgroundColor: '#f3f3f3',
          margin: `${theme.spacing.unit * 2}px auto`,
          padding: theme.spacing.unit * 2,
          borderLeft: 'solid 4px #ddd',
          borderRadius: '8px'
        }
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  children: JSX.Element[] | JSX.Element;
}

const Container: React.FC<Props> = (props: Props) => <div className={props.classes.root}>{props.children}</div>;

export default withStyles(styles)(Container);
