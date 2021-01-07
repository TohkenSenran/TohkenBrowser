import * as React from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@material-ui/core';

import { RootState } from '../states/index';
import { Duty } from '../states/responseJson/Duty';
import { Swords } from '../states/responseJson/Sword';
import { SwordPanel } from './SwordPanel';
import { getRemainingTime } from '../models/getRemainingTime';

export const DutyPanel: React.FC = () => {
  const date = useSelector<RootState, number>((state) => state.responseJson.newDate);
  const duty = useSelector<RootState, Duty>((state) => state.responseJson.duty);
  const sword = useSelector<RootState, Swords>((state) => state.responseJson.sword);
  // console.log('Update Duty');
  return (
    <>
      <Box display="flex" flexDirection="row">
        <Box style={{ margin: '0px 3px', height: 18 }}>内番担当</Box>
        <Box style={{ margin: '0px 0px 0px 36px', height: 18 }}>
          {getRemainingTime(duty.finished_at, date)}
        </Box>
      </Box>
      <div style={{ display: 'inline-block', marginRight: 9 }}>
        <SwordPanel swords={sword} serialId={duty.horse_id1} />
        <SwordPanel swords={sword} serialId={duty.horse_id2} />
      </div>
      <div style={{ display: 'inline-block', marginRight: 9 }}>
        <SwordPanel swords={sword} serialId={duty.field_id1} />
        <SwordPanel swords={sword} serialId={duty.field_id2} />
      </div>
      <div style={{ display: 'inline-block', marginRight: 9 }}>
        <SwordPanel swords={sword} serialId={duty.bout_id1} />
        <SwordPanel swords={sword} serialId={duty.bout_id2} />
      </div>
    </>
  );
};
