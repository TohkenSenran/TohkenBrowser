/* eslint-disable prettier/prettier */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { FormControlLabel, Switch } from '@material-ui/core';

import { BrowserSettingActions, setEnableNotify } from '../actions/browserSetting';
import { RootState } from '../states/index';

export const EnableNotify: React.FC = () => {
  const dispatch = useDispatch<Dispatch<BrowserSettingActions>>();
  const enableNotify = useSelector<RootState, boolean>(
    (state) => state.browserSetting.enableNotify,
  );

  // console.log('switch状態', props.enableNotify);
  const handleChange =
    () =>
      (event: React.ChangeEvent<HTMLInputElement>): void => {
      // console.log('switch切替', event.target.checked);
        dispatch(setEnableNotify(event.target.checked));
      };
  return (
    <FormControlLabel
      control={<Switch checked={enableNotify} onChange={handleChange()} value="enableNotify" />}
      label="通知機能"
    />
  );
};
