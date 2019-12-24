import * as React from 'react';

import { Box } from '@material-ui/core';
import { DutyPanelProps } from '../containers/DutyPanel';
import { getRemainingTime } from '../models/getRemainingTime';
import { Duty } from '../states/responseJson/Duty';
import { Swords } from '../states/responseJson/Sword';
import SwordPanel from './SwordPanel';

const DutyPanel: React.FC<DutyPanelProps> = (props) => {
  const dutyData: Duty = props.duty;
  const swordData: Swords = props.sword;
  // console.log('Update Duty');
  return (
    <React.Fragment>
      <Box display="flex" flexDirection="row">
        <Box style={{ margin: '0px 3px', height: 18 }}>
          {'内番担当'}
        </Box>
        <Box style={{ margin: '0px 0px 0px 36px', height: 18 }}>
          {getRemainingTime(props.duty.finished_at, props.date)}
        </Box>
      </Box>
      <div style={{ display: 'inline-block', marginRight: 9 }}>
        <SwordPanel swords={swordData} serialId={dutyData.horse_id1} />
        <SwordPanel swords={swordData} serialId={dutyData.horse_id2} />
      </div>
      <div style={{ display: 'inline-block', marginRight: 9 }}>
        <SwordPanel swords={swordData} serialId={dutyData.field_id1} />
        <SwordPanel swords={swordData} serialId={dutyData.field_id2} />
      </div>
      <div style={{ display: 'inline-block', marginRight: 9 }}>
        <SwordPanel swords={swordData} serialId={dutyData.bout_id1} />
        <SwordPanel swords={swordData} serialId={dutyData.bout_id2} />
      </div>
    </React.Fragment>

  );
};

export default DutyPanel;
