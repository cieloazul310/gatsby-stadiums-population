import * as React from 'react';
import classnames from 'classnames';
//import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles /*StyleRules*/ } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = createStyles({
  root: {
    width: '100%',
    minHeight: 60
  },
  ad: {
    display: 'block'
  }
});

type Props = WithStyles<typeof styles>;

class AdBox extends React.PureComponent<Props> {
  componentDidMount() {
    if (window) (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="subtitle2">広告</Typography>
        <ins
          className={classnames('adsbygoogle', classes.ad)}
          data-ad-client="ca-pub-7323207940463794"
          data-ad-slot={3901734109}
          data-ad-format="auto"
          data-full-width-responsive={true}
        />
      </div>
    );
  }
}

export default withStyles(styles)(AdBox);
