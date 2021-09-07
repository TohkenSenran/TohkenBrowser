import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { BrowserSettingActions, changeMute } from '../actions/browserSetting';
import { RootState } from '../states/index';
import { IconFontButton } from './IconFontButton';

export const MuteButton: React.FC = () => {
  const dispatch = useDispatch<Dispatch<BrowserSettingActions>>();
  const mute = useSelector<RootState, boolean>((state) => state.browserSetting.mute);
  const handleClick = (): void => {
    dispatch(changeMute(mute));
  };
  return (
    <IconFontButton
      iconName={mute ? 'volume_off' : 'volume_up'}
      tooltipText={mute ? '音声無し' : '音声有り'}
      onClick={handleClick}
    />
  );
};
