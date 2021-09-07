import React from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@material-ui/core';

import { repairNo } from '../../constants';
import { RootState } from '../states/index';
import { Repairs, repairInitialState } from '../states/responseJson/Repair';
import { Swords } from '../states/responseJson/Sword';
import { repairConverter } from '../models/repairConverter';

import { SwordPanel } from './SwordPanel';

export const RepairPanel: React.FC = () => {
  const date = useSelector<RootState, number>((state) => state.responseJson.newDate);
  const repair = useSelector<RootState, Repairs>((state) => state.responseJson.repair);
  const sword = useSelector<RootState, Swords>((state) => state.responseJson.sword);

  const repairs: React.ReactElement[] = [];
  // console.log('Update Duty');

  for (let i = 0; i < repairNo; i += 1) {
    let repairState = repairConverter(repairInitialState, date);
    // console.log(`check repairKey ${(props.repair[i + 1])}`);
    if (repair[i + 1]) {
      // console.log('in Repair rewrite');
      repairState = repairConverter(repair[i + 1], date);
    }
    // console.log('out Repair rewrite');

    repairs.push(
      <SwordPanel
        swords={sword}
        serialId={repairState.serialId}
        stateText={repairState.remainingTime}
      />,
    );
  }
  return (
    <>
      <div style={{ margin: '0px 3px', height: 18 }}>手入部屋</div>
      <Box display="flex" flexDirection="row">
        {repairs}
      </Box>
    </>
  );
};
