import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { FormControlLabel, Switch } from '@material-ui/core';
import { addCopyright, BrowserSettingActions } from '../actions/browserSetting';
import { RootState } from '../states/index';

export const AddCopyright: React.FC = () => {
  const dispatch = useDispatch<Dispatch<BrowserSettingActions>>();
  const showCopyright = useSelector<RootState, boolean>(
    (state) => state.browserSetting.showCopyright,
  );
  // console.log('switch状態', props.enableNotify);
  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log('switch切替', event.target.checked);
    dispatch(addCopyright(event.target.checked));
  };
  return (
    <FormControlLabel
      control={<Switch checked={showCopyright} onChange={handleChange()} />}
      label="版権表示"
    />
  );
};
