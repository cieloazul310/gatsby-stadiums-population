import * as React from 'react';
import Icon, { IconProps } from '@material-ui/core/Icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

type Props = IconProps;

class TwitterIcon extends React.PureComponent<Props> {
  componentWillMount() {
    library.add(faTwitter);
  }
  public render() {
    return (
      <Icon {...this.props}>
        <FontAwesomeIcon style={{ verticalAlign: '0.125em' }} icon={['fab', 'twitter']} />
      </Icon>
    );
  }
}

export default TwitterIcon;
