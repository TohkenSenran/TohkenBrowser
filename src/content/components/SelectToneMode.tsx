import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { BrowserSettingActions, selectToneMode } from '../actions/browserSetting';
import { RootState } from '../states/index';
import { toneMode } from '../../constants';

export const SelectToneMode: React.FC = () => {
  const dispatch = useDispatch<Dispatch<BrowserSettingActions>>();
  const color = useSelector<RootState, toneMode>((state) => state.browserSetting.colorTone);

  const [values, setValues] = React.useState(color);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
    if (typeof event.target.value !== 'undefined') {
      setValues(event.target.value as toneMode);
      // console.log(`GetValue: ${event.target.value}`);
      dispatch(selectToneMode(event.target.value as toneMode));
    }
  };

  return (
    <FormControl style={{ marginTop: '6px' }}>
      <InputLabel htmlFor="tone-mode">色調選択</InputLabel>
      <Select
        value={values}
        onChange={handleChange}
        inputProps={{ name: 'toneMode', id: 'tone-mode' }}
      >
        <MenuItem value={toneMode.LIGHT}>ライト</MenuItem>
        <MenuItem value={toneMode.DARK}>ダーク</MenuItem>
        <MenuItem value={toneMode.AUTO}>OS連動</MenuItem>
      </Select>
    </FormControl>
  );
};
