import * as React from 'react';
import IconFontButton from './IconFontButton';

import { MuteButtonProps } from '../containers/MuteButton';

const MuteButton: React.FC<MuteButtonProps> = (props) => {
  const handleClick = (): void => {
    props.onClick(props.browserSetting.mute);
  };
  const { browserSetting } = props;
  if (browserSetting.mute) {
    return <IconFontButton iconName="volume_off" tooltipText="音声無し" onClick={handleClick} />;
  }
  return <IconFontButton iconName="volume_up" tooltipText="音声有り" onClick={handleClick} />;
};

export default MuteButton;
