import * as React from 'react';

import { Card, CardContent } from '@material-ui/core';

import { PartyPanelProps } from '../containers/PartyPanel';
import { Equips } from '../states/responseJson/Equip';
import { Parties } from '../states/responseJson/Party';
import { Swords } from '../states/responseJson/Sword';
import PartyPanelContents from './PartyPanelContents';

const PartyPanel: React.FC<PartyPanelProps> = (props) => {
  const handleClick = () => {
    // console.log(`PartyPanel Click! ${props.partyPanel.textType.toString()}`);
    props.selectText(props.partyPanel.textType, props.partyPanel.selectViewStatus);
  };

  const partyData: Parties = props.party;
  const swordData: Swords = props.sword;
  const equipData: Equips = props.equip;
  // console.log('Update Party');
  // console.log(`updatePartyPanel ${props.partyPanel.correct}`);

  // 結成の時に表示切替
  let extendView: boolean = false;
  if ((props.partyPanel.enableExtendView) && (props.page) &&
    (((props.page.indexOf('party/') > -1) && (props.page !== 'party/get_sally_party_info')) ||
      (props.page.indexOf('equip/') > -1))) {
    // console.log('in party', props.partyPanel.extendView);
    /*
    if (!props.partyPanel.extendView) {
      props.clickPartyProps(false);
    }
    */
    // console.log('in party', extendView);

    if (!extendView) { extendView = true; }
  } else {
    // console.log('not party', props.partyPanel.extendView);
    /*
    if (props.partyPanel.extendView) {
      props.clickPartyProps(true);
    }
    */
    if (extendView) { extendView = false; }
    // console.log('not party', extendView);

  }

  const panelStyle = {
    extend: {
      height: 288,
      width: 636,
      transition: 'all .5s ease',
    },
    normal: {
      height: 288,
      width: 478,
      transition: 'all .5s ease',
    },
  };
  const partyPanelStyle: React.CSSProperties = extendView ? panelStyle.extend : panelStyle.normal;

  return (
    <Card style={partyPanelStyle}>
      <CardContent style={{ padding: 0, margin: 6 }}>
        <PartyPanelContents
          partyData={partyData}
          swordData={swordData}
          equipData={equipData}
          extendView={extendView}
          partyPanel={props.partyPanel}
          date={props.date}
          onClick={handleClick}
        />
      </CardContent>
    </Card>
  );
};

export default PartyPanel;
