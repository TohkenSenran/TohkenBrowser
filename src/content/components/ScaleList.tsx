import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { InputLabel, MenuItem, Select } from '@material-ui/core';

import { BrowserSettingActions, selectScale } from '../actions/browserSetting';
import { RootState } from '../states/index';

export const ScaleList: React.FC = () => {
  const dispatch = useDispatch<Dispatch<BrowserSettingActions>>();
  const scale = useSelector<RootState, number>((state) => state.browserSetting.scale);

  const [values, setValues] = React.useState({
    scale,
  });

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>): void => {
    if (typeof event.target.value !== 'undefined') {
      setValues((oldValues) => ({
        ...oldValues,
        [event.target.name as string]: event.target.value,
      }));
      // console.log('GetValue: ' + event.target.value);
      dispatch(selectScale(event.target.value as number));
    }
  };

  return (
    <>
      <InputLabel htmlFor="scale-list">描画倍率</InputLabel>
      <Select
        value={values.scale}
        onChange={handleChange}
        inputProps={{ name: 'scale', id: 'scale-list' }}
      >
        <MenuItem value={1.0}>100 %</MenuItem>
        <MenuItem value={0.8}> 80 %</MenuItem>
        <MenuItem value={0.75}> 75 %</MenuItem>
        <MenuItem value={0.6}> 60 %</MenuItem>
        <MenuItem value={0.5}> 50 %</MenuItem>
      </Select>
    </>
  );
};
