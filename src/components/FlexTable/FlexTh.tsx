import * as React from 'react';
import classNames from 'classnames';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      width: '6em',
      textAlign: 'right',
      fontWeight: 'bold',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        textAlign: 'left'
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  className?: string;
  children: JSX.Element | (JSX.Element | string)[] | string;
}

const FlexTh: React.FC<Props> = ({ classes, className, children }: Props) => (
  <div className={classNames(classes.root, className)}>{children}</div>
);

export default withStyles(styles)(FlexTh);
