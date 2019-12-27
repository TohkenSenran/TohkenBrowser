import * as React from 'react';

import { Checkbox, FormLabel, Box } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import { SelectSpeedCorrectProps } from '../containers/SelectSpeedCorrect';
import { getSpeedCorrect, speedCorrect } from '../states/PartyPanelState';

export const SelectSpeedCorrect: React.FC<SelectSpeedCorrectProps> = (props) => {
  const [value, setValue] = React.useState(props.correct.toString());
  const handleRadioChange = (event: React.ChangeEvent<unknown>) => {
    setValue((event.target as HTMLInputElement).value);
    // console.log(`check selectSpeed ${(event.target as HTMLInputElement).value}`);
    props.selectCorrect(getSpeedCorrect((event.target as HTMLInputElement).value));
    // console.log(`check selectSpeed ${props.correct1}`);
  };
  const handleCheckChange = () => {
    props.checkHorseDisable(props.horseDisable);
  };

  return (
    <React.Fragment>
      <FormLabel style={{ fontSize: 12 }}>{'機動補正選択'}</FormLabel>
      <RadioGroup
        aria-label="correctType"
        value={value}
        onChange={handleRadioChange}
      >
        <FormControlLabel
          value={speedCorrect.none}
          control={<Radio size="small" />}
          label="補正無し"
        />
        <FormControlLabel
          value={speedCorrect.normal}
          control={<Radio size="small" />}
          label="通常補正"
        />
        <FormControlLabel
          value={speedCorrect.stage7}
          control={<Radio size="small" />}
          label="時代7補正"
        />
      </RadioGroup>
      <FormControlLabel
        control={<Checkbox checked={props.horseDisable} onChange={handleCheckChange} size="small" />}
        label="市街/屋内戦"
      />
    </React.Fragment>
  );
};

export default SelectSpeedCorrect;
