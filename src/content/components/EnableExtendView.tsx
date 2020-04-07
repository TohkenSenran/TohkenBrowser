import * as React from 'react';

import { FormControlLabel, Switch } from '@material-ui/core';
import { EnableMemberStateExtendView } from '../containers/EnableExtendView';

const EnableExtendView: React.FC<EnableMemberStateExtendView> = (props) => {
  // console.log('switch状態', props.EnableExtendView);
  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log('switch切替', event.target.checked);
    props.onChange(event.target.checked);
  };
  const { enableExtendView } = props;
  return (
    <FormControlLabel
      control={
        <Switch checked={enableExtendView} onChange={handleChange()} value="enableExtendView" />
      }
      label="結成表示"
    />
  );
};

export default EnableExtendView;
