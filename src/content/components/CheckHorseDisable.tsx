import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { Checkbox, FormControlLabel } from '@material-ui/core/';
import { checkHorseDisable, PartyPanelActions } from '../actions/partyPanel';
import { RootState } from '../states/index';

export const CheckHorseDisable: React.FC = () => {
  const dispatch = useDispatch<Dispatch<PartyPanelActions>>();
  const horseDisable = useSelector<RootState, boolean>((state) => state.partyPanel.horseDisable);
  const handleChange = (): void => {
    dispatch(checkHorseDisable(horseDisable));
  };

  return (
    <FormControlLabel
      control={<Checkbox checked={horseDisable} onChange={handleChange} />}
      label="市街/屋内戦"
    />
  );
};
