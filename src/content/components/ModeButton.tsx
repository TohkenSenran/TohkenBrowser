import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { BrowserSettingActions, changeViewMode } from '../actions/browserSetting';
import { windowMode } from '../states/BrowserSettingState';
import { RootState } from '../states/index';
import { IconTextButton } from './IconTextButton';

export const ModeButton: React.FC = () => {
  const dispatch = useDispatch<Dispatch<BrowserSettingActions>>();
  const mode = useSelector<RootState, windowMode>((state) => state.browserSetting.mode);
  const handleClick = (): void => {
    dispatch(changeViewMode(mode));
  };

  switch (mode) {
    case windowMode.SEN:
      return <IconTextButton iconText="専" tooltipText="専用" onClick={handleClick} />;
    case windowMode.SHOU:
      return <IconTextButton iconText="詳" tooltipText="詳細" onClick={handleClick} />;
    case windowMode.HYOU:
      return <IconTextButton iconText="標" tooltipText="標準" onClick={handleClick} />;
    default:
      return <IconTextButton iconText="専" tooltipText="専用" onClick={handleClick} />;
  }
};
