import * as React from 'react';

import { Checkbox, Divider, Tooltip } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import { correctType } from '../../constants';
import { SelectSpeedCorrectProps } from '../containers/SelectSpeedCorrect';
import { getSpeedCorrect } from '../states/PartyPanelState';

const SelectSpeedCorrect: React.FC<SelectSpeedCorrectProps> = (props) => {
  const { correct } = props;
  const { horseDisable } = props;
  const [value, setValue] = React.useState(correct.toString());
  const handleRadioChange = (event: React.ChangeEvent<unknown>): void => {
    setValue((event.target as HTMLInputElement).value);
    // console.log(`check selectSpeed ${(event.target as HTMLInputElement).value}`);
    props.selectCorrect(getSpeedCorrect((event.target as HTMLInputElement).value));
    // console.log(`check selectSpeed ${correct1}`);
  };
  const handleCheckChange = (): void => {
    props.checkHorseDisable(props.horseDisable);
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

export default SelectSpeedCorrect;
