import * as React from 'react';

import { repairNo } from '../../constants';
import { RepairPanelProps } from '../containers/RepairPanel';
import { repairConverter } from '../models/repairConverter';
import { repairInitialState } from '../states/responseJson/Repair';
import { Swords } from '../states/responseJson/Sword';
import SwordPanel from './SwordPanel';

const RepairPanel: React.FC<RepairPanelProps> = (props) => {
  const swordData: Swords = props.sword;
  const repairs: JSX.Element[] = [];
  // console.log('Update Duty');

  for (let i: number = 0; i < repairNo; i += 1) {
    let repairState = repairConverter(repairInitialState, props.date);
    // console.log(`check repairKey ${(props.repair[i + 1])}`);
    if (props.repair[i + 1]) {
      // console.log('in Repair rewrite');
      repairState = repairConverter(props.repair[i + 1], props.date);
    }
    // console.log('out Repair rewrite');

    repairs.push(
      <div style={{ display: 'inline-block' }}>
        <SwordPanel
          swords={swordData}
          serialId={repairState.serialId}
          stateText={repairState.remainingTime}
        />
      </div>,
    );
  }
  return (
    <>
      <div style={{ margin: '0px 3px', height: 18 }}>手入部屋</div>
      {repairs}
    </>
  );
};

export default RepairPanel;
