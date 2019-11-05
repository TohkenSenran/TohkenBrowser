import * as React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { SelectSpeedCorrectProps } from '../containers/SelectSpeedCorrect';
import { getSpeedCorrect, speedCorrect } from '../states/PartyPanelState';

export const SelectSpeedCorrect: React.FC<SelectSpeedCorrectProps> = (props) => {
  const [value, setValue] = React.useState(props.correct.toString());
  const handleChange = (event: React.ChangeEvent<unknown>) => {
    setValue((event.target as HTMLInputElement).value);
    // console.log(`check selectSpeed ${(event.target as HTMLInputElement).value}`);
    props.selectCorrect(getSpeedCorrect((event.target as HTMLInputElement).value));
    // console.log(`check selectSpeed ${props.correct1}`);
  };

  return (
    <RadioGroup
      aria-label="correctType"
      name="correctType1"
      value={value}
      onChange={handleChange}
    >
      <FormControlLabel value={speedCorrect.none} control={<Radio />} label="補正無し" />
      <FormControlLabel value={speedCorrect.normal} control={<Radio />} label="通常補正" />
      <FormControlLabel value={speedCorrect.stage7} control={<Radio />} label="時代7補正" />
    </RadioGroup>
  );
};

export default SelectSpeedCorrect;
