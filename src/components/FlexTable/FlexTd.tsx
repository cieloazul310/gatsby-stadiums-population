import * as React from 'react';
import classNames from 'classnames';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      flex: '1',
      paddingLeft: theme.spacing.unit,
      textAlign: 'left',
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing.unit * 2
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  className?: string;
  children: JSX.Element | (JSX.Element | string)[] | string;
}

const FlexTd: React.FC<Props> = ({ classes, className, children }: Props) => (
  <div className={classNames(classes.root, className)}>{children}</div>
);

export default withStyles(styles)(FlexTd);
