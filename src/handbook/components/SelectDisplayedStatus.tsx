/* eslint-disable prettier/prettier */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { Box, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';

import { HomeSwordsTableActions, selectDisplayedStatus } from '../actions/homeSwordsTable';
import { HandbookState } from '../states/index';
import { statusLabel, statusType } from '../../constants';

export const SelectDisplayedStatus: React.FC = () => {
  const dispatch = useDispatch<Dispatch<HomeSwordsTableActions>>();
  const displayedStatus = useSelector<HandbookState, boolean[]>(
    (state) => state.homeSwordsTable.displayedStatus,
  );
  const checks: React.ReactElement[] = [];
  const [viewStatus, setDisplayedStatus] = React.useState(displayedStatus);

  const handleChange =
    (target: number) =>
      (event: React.ChangeEvent<HTMLInputElement>): void => {
      // console.log('viewStatus: %o', viewStatus);
        const tempDisplayedStatus: boolean[] = { ...viewStatus };
        tempDisplayedStatus[target] = event.target.checked;
        // console.log('viewStatus: %o', viewStatus);
        setDisplayedStatus(tempDisplayedStatus);
        dispatch(selectDisplayedStatus(tempDisplayedStatus));
      // console.log('viewStatus: %o', viewStatus);
      };

  Object.values(statusType).forEach((value) => {
    if (typeof value === 'number' && value !== statusType.none && value !== statusType.amulet) {
      // const onChange = () => { handleChange(value, viewStatus[value]); };
      checks.push(
        <FormControlLabel
          checked={viewStatus[value]}
          control={<Checkbox size="small" onChange={handleChange(value)} />}
          label={statusLabel[statusType[value]]}
        />,
      );
    }
  });

  return (
    <Box width="150px">
      <FormGroup row>{checks}</FormGroup>
    </Box>
  );
};
