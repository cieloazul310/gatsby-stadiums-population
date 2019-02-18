import * as React from 'react';
import Icon from '@material-ui/core/Icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

interface Props {
  color?: 'primary' | 'secondary' | 'action' | 'error' | 'disabled';
}

class TwitterIcon extends React.PureComponent<Props> {
  componentWillMount() {
    library.add(faTwitter);
  }
  public render() {
    const { color } = this.props;
    return (
      <Icon color={color}>
        <FontAwesomeIcon style={{ verticalAlign: '0.125em' }} icon={['fab', 'twitter']} />
      </Icon>
    );
  }
}

export default TwitterIcon;
