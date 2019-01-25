import * as React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';

const styles: StyleRules = createStyles({
  root: {
    display: 'block',
    width: 'auto',
    margin: 0,
    padding: 0
  }
});

const defaultExtent = {
  width: [300, 800],
  height: [300, 600]
};

interface Props extends WithStyles<typeof styles> {
  children: React.ReactElement<any>;
  id: string;
}

interface Size {
  width: number;
  height: number;
}

interface State {
  size: Size;
}

class ChartContainer extends React.Component<Props, State> {
  readonly state: State = {
    size: {
      width: defaultExtent.width[1],
      height: defaultExtent.height[1]
    }
  };

  private _resize = () => {
    const container = document.getElementById(this.props.id);
    if (container) {
      const { width, height } = container.getBoundingClientRect();

      const calcSize = {
        width: width,
        height: height
      };

      this.setState({
        size: calcSize
      });
    }
  };

  componentDidMount() {
    this._resize();
    window.addEventListener('resize', this._resize);
  }

  render() {
    const { size } = this.state;
    const { id, children } = this.props;
    return <div id={id}>{React.cloneElement(children, { size })}</div>;
  }
}

export default withStyles(styles)(ChartContainer);
