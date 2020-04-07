import * as React from 'react';

import { FormControlLabel, Switch } from '@material-ui/core';
import { AddCopyrightProps } from '../containers/AddCopyright';

const AddCopyright: React.FC<AddCopyrightProps> = (props) => {
  // console.log('switch状態', props.enableNotify);
  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log('switch切替', event.target.checked);
    props.onChange(event.target.checked);
  };
  const { addCopyright } = props;
  return (
    <FormControlLabel
      control={<Switch checked={addCopyright} onChange={handleChange()} />}
      label="版権表示"
    />
  );
};

export default AddCopyright;
