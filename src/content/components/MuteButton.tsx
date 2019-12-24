import * as React from 'react';
import IconFontButton from './IconFontButton';

import { MuteButtonProps } from '../containers/MuteButton';

const MuteButton: React.FC<MuteButtonProps> = (props) => {
  const handleClick = () => {
    props.onClick(props.browserSetting.mute);
  };

  if (props.browserSetting.mute) {
    return (
      <IconFontButton iconName="volume_off" tooltipText="音声無し" onClick={handleClick} />
    );
  }
  return (
    <IconFontButton iconName="volume_up" tooltipText="音声有り" onClick={handleClick} />
  );
};

export default MuteButton;
