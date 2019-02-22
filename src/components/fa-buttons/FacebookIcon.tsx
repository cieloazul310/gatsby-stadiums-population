import * as React from 'react';
import Icon, { IconProps } from '@material-ui/core/Icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';

type Props = IconProps;

class FacebookIcon extends React.PureComponent<Props> {
  componentWillMount() {
    library.add(faFacebook);
  }
  public render() {
    return (
      <Icon {...this.props}>
        <FontAwesomeIcon style={{ verticalAlign: '0.125em' }} icon={['fab', 'facebook']} />
      </Icon>
    );
  }
}

export default FacebookIcon;
