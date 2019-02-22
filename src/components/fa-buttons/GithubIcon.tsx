import * as React from 'react';
import Icon, { IconProps } from '@material-ui/core/Icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

type Props = IconProps;

class TwitterIcon extends React.PureComponent<Props> {
  componentWillMount() {
    library.add(faGithub);
  }
  public render() {
    return (
      <Icon {...this.props}>
        <FontAwesomeIcon style={{ verticalAlign: '0.125em' }} icon={['fab', 'github']} />
      </Icon>
    );
  }
}

export default TwitterIcon;
