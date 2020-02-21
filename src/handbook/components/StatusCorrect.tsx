import * as React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { correctType } from '../../constants';
import { StatusCorrectProps } from '../containers/StatusCorrect';

export const StatusCoorect: React.FC<StatusCorrectProps> = (props) => {
  const [value, setValue] = React.useState(props.correct.toString());
  const handleRadioChange = (event: React.ChangeEvent<unknown>) => {
    setValue((event.target as HTMLInputElement).value);
    // console.log(`check selectSpeed ${(event.target as HTMLInputElement).value}`);
    props.selectCorrect(correctType[(event.target as HTMLInputElement).value]);
    // console.log(`check selectSpeed ${props.correct1}`);
  };

  return (
    <RadioGroup
      aria-label="correctType"
      value={value}
      onChange={handleRadioChange}
    >
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
  );
};

export default StatusCoorect;
