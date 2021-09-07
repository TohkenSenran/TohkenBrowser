/* eslint-disable prettier/prettier */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { Box, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';

import { PartyPanelActions, setSelectViewStatus } from '../actions/partyPanel';
import { RootState } from '../states/index';
import { statusLabel, statusType } from '../../constants';

export const SelectViewStatus: React.FC = () => {
  const dispatch = useDispatch<Dispatch<PartyPanelActions>>();
  const displayedStatus = useSelector<RootState, boolean[]>(
    (state) => state.partyPanel.displayedStatus,
  );

  const checks: React.ReactElement[] = [];
  const [viewStatus, setViewStatus] = React.useState(displayedStatus);

  const handleChange =
    (target: number) =>
      (event: React.ChangeEvent<HTMLInputElement>): void => {
      // console.log('viewStatus: %o', viewStatus);
        const tempViewStatus: boolean[] = { ...viewStatus };
        tempViewStatus[target] = event.target.checked;
        // console.log('viewStatus: %o', viewStatus);
        setViewStatus(tempViewStatus);
        dispatch(setSelectViewStatus(tempViewStatus));
      // console.log('viewStatus: %o', viewStatus);
      };

  Object.entries(statusType).forEach(([key, value]) => {
    if (typeof value === 'number' && value > 0) {
      // const onChange = () => { handleChange(value, viewStatus[value]); };
      checks.push(
        <FormControlLabel
          checked={viewStatus[value]}
          control={<Checkbox size="small" onChange={handleChange(value)} />}
          label={statusLabel[key]}
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
