import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { FormControlLabel, Switch } from '@material-ui/core';
import { PartyPanelActions, setEnableExtendView } from '../actions/partyPanel';
import { RootState } from '../states/index';

export const EnableExtendView: React.FC = () => {
  const dispatch = useDispatch<Dispatch<PartyPanelActions>>();
  const enableExtendView = useSelector<RootState, boolean>(
    (state) => state.partyPanel.enableExtendView,
  );

  // console.log('switch状態', props.EnableExtendView);
  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log('switch切替', event.target.checked);
    dispatch(setEnableExtendView(event.target.checked));
  };
  return (
    <FormControlLabel
      control={
        <Switch checked={enableExtendView} onChange={handleChange()} value="enableExtendView" />
      }
      label="結成表示"
    />
  );
};
