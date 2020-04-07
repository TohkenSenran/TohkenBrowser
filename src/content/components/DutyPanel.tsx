import * as React from 'react';

import { Box } from '@material-ui/core';
import { DutyPanelProps } from '../containers/DutyPanel';
import { getRemainingTime } from '../models/getRemainingTime';
import SwordPanel from './SwordPanel';

const DutyPanel: React.FC<DutyPanelProps> = (props) => {
  const { date } = props;
  const { duty } = props;
  const { sword } = props;
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

export default DutyPanel;
