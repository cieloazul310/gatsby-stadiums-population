import * as React from 'react';
import Icon from '@material-ui/core/Icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';

interface Props {
  color?: 'primary' | 'secondary' | 'action' | 'error' | 'disabled';
}

class FacebookIcon extends React.PureComponent<Props> {
  componentWillMount() {
    library.add(faFacebook);
  }
  public render() {
    const { color } = this.props;
    return (
      <Icon color={color}>
        <FontAwesomeIcon icon={['fab', 'facebook']} />
      </Icon>
    );
  }
}

export default FacebookIcon;
