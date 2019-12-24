import * as React from 'react';

import { FormControlLabel, Switch } from '@material-ui/core';
import { EnableMemberStateViewProps } from '../containers/EnableMemberStateView';

const EnableMemberStateView: React.FC<EnableMemberStateViewProps> = (props) => {
  // console.log('switch状態', props.EnableMemberStateView);
  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('switch切替', event.target.checked);
    props.onChange(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Switch checked={props.enableMemberStateView} onChange={handleChange()} value="enableMemberStateView" />}
      label={'結成表示切替'}
    />
  );
};

export default EnableMemberStateView;
