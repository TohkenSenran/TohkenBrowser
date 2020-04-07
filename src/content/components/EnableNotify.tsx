import * as React from 'react';

import { FormControlLabel, Switch } from '@material-ui/core';
import { EnableNotifyProps } from '../containers/EnableNotify';

const EnableNotify: React.FC<EnableNotifyProps> = (props) => {
  // console.log('switch状態', props.enableNotify);
  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log('switch切替', event.target.checked);
    props.onChange(event.target.checked);
  };
  const { enableNotify } = props;
  return (
    <FormControlLabel
      control={<Switch checked={enableNotify} onChange={handleChange()} value="enableNotify" />}
      label="通知機能"
    />
  );
};

export default EnableNotify;
