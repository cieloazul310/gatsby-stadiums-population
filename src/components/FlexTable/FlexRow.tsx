import * as React from 'react';
import classNames from 'classnames';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: theme.spacing.unit / 2,
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignItems: 'start'
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

const FlexRow: React.FC<Props> = ({ classes, className, children }: Props) => (
  <div className={classNames(classes.root, className)}>{children}</div>
);

export default withStyles(styles)(FlexRow);
