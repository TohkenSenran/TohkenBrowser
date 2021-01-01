import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

import { correctType } from '../../constants';
import { HomeSwordsTableActions, selectCorrect } from '../actions/homeSwordsTable';
import { HandbookState } from '../states/index';

export const StatusCorrect: React.FC = () => {
  const dispatch = useDispatch<Dispatch<HomeSwordsTableActions>>();
  const correct = useSelector<HandbookState, correctType>((state) => state.homeSwordsTable.correct);

  const [value, setValue] = React.useState(correct.toString());
  const handleRadioChange = (event: React.ChangeEvent<unknown>): void => {
    setValue((event.target as HTMLInputElement).value);
    // console.log(`check selectSpeed ${(event.target as HTMLInputElement).value}`);
    const key: keyof typeof correctType = (event.target as HTMLInputElement)
      .value as keyof typeof correctType;
    dispatch(selectCorrect(correctType[key]));
    // console.log(`check selectSpeed ${props.correct1}`);
  };

  return (
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
  );
};
