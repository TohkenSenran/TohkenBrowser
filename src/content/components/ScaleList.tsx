import * as React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { ScaleListProps } from '../containers/ScaleList';

const ScaleList: React.FC<ScaleListProps> = (props) => {
  const [values, setValues] = React.useState({
    scale: props.browserSetting.scale,
  });

  function handleChange(event: React.ChangeEvent<{ name?: string; value: number }>) {
    if (typeof event.target.value !== 'undefined') {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name as string]: event.target.value,
      }));
      // console.log('GetValue: ' + event.target.value);
      props.onChange(event.target.value);
    }
  }
  return (
    <>
      <InputLabel htmlFor="scale-list">{'描画倍率'}</InputLabel>
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

export default ScaleList;
