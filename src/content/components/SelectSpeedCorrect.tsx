import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { Checkbox, Divider, Tooltip, Radio, RadioGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { correctType } from '../../constants';
import { checkHorseDisable, PartyPanelActions, selectCorrect } from '../actions/partyPanel';
import { RootState } from '../states/index';
import { getSpeedCorrect } from '../states/PartyPanelState';

export const SelectSpeedCorrect: React.FC = () => {
  const dispatch = useDispatch<Dispatch<PartyPanelActions>>();
  const correct = useSelector<RootState, correctType>((state) => state.partyPanel.correct);
  const horseDisable = useSelector<RootState, boolean>((state) => state.partyPanel.horseDisable);

  const [value, setValue] = React.useState(correct.toString());
  const handleRadioChange = (event: React.ChangeEvent<unknown>): void => {
    setValue((event.target as HTMLInputElement).value);
    // console.log(`check selectSpeed ${(event.target as HTMLInputElement).value}`);
    dispatch(selectCorrect(getSpeedCorrect((event.target as HTMLInputElement).value)));
    // console.log(`check selectSpeed ${correct1}`);
  };
  const handleCheckChange = (): void => {
    dispatch(checkHorseDisable(horseDisable));
  };

  return (
    <>
      <RadioGroup aria-label="correctType" value={value} onChange={handleRadioChange}>
        <FormControlLabel
          value={correctType.none}
          control={<Radio size="small" />}
          label="補正無し"
        />
        <FormControlLabel
          value={correctType.normal}
          control={<Radio size="small" />}
          label="通常補正"
        />
        <FormControlLabel
          value={correctType.stage7}
          control={<Radio size="small" />}
          label="時代7補正"
        />
      </RadioGroup>
      <Divider />
      <Tooltip title="馬の有効/無効を切替">
        <FormControlLabel
          control={<Checkbox checked={horseDisable} onChange={handleCheckChange} size="small" />}
          label="市街/屋内戦"
        />
      </Tooltip>
    </>
  );
};
