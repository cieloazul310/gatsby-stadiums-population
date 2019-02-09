import * as React from 'react';
import Icon from '@material-ui/core/Icon';
const { loadCSS } = require('fg-loadcss/src/loadCSS');

interface Props {
  color?: 'primary' | 'secondary' | 'action' | 'error' | 'disabled';
}

class TwitterIcon extends React.PureComponent<Props> {
  /*
  componentDidMount() {
    loadCSS('https://use.fontawesome.com/releases/v5.1.0/css/all.css', document.querySelector('#insertion-point-jss'));
  }
  */
  public render() {
    const { color } = this.props;
    return <Icon className="fab fa-twitter" color={color || 'inherit'} />;
  }
}

export default TwitterIcon;
