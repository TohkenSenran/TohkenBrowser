import * as React from 'react';

import { FormControlLabel, Switch } from '@material-ui/core';
import { EnableMemberStateExtendView } from '../containers/EnableExtendView';

const EnableExtendView: React.FC<EnableMemberStateExtendView> = (props) => {
  // console.log('switch状態', props.EnableExtendView);
  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('switch切替', event.target.checked);
    props.onChange(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Switch checked={props.enableExtendView} onChange={handleChange()} value="enableExtendView" />}
      label={'結成表示切替'}
    />
  );
};

export default EnableExtendView;
