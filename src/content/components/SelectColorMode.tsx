import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { BrowserSettingActions, selectColorMode } from '../actions/browserSetting';
import { RootState } from '../states/index';
import { colorMode } from '../../constants';

export const SelectColorMode: React.FC = () => {
  const dispatch = useDispatch<Dispatch<BrowserSettingActions>>();
  const color = useSelector<RootState, colorMode>((state) => state.browserSetting.color);

  const [values, setValues] = React.useState(color);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
    if (typeof event.target.value !== 'undefined') {
      setValues(event.target.value as colorMode);
      // console.log(`GetValue: ${event.target.value}`);
      dispatch(selectColorMode(event.target.value as colorMode));
    }
  };

  return (
    <FormControl style={{ marginTop: '6px' }}>
      <InputLabel htmlFor="color-mode">色調選択</InputLabel>
      <Select
        value={values}
        onChange={handleChange}
        inputProps={{ name: 'colorMode', id: 'color-mode' }}
      >
        <MenuItem value={colorMode.LIGHT}>ライト</MenuItem>
        <MenuItem value={colorMode.DARK}>ダーク</MenuItem>
        <MenuItem value={colorMode.AUTO}>OS連動</MenuItem>
      </Select>
    </FormControl>
  );
};
