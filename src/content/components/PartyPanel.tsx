import * as React from 'react';

import { Card, CardContent } from '@material-ui/core';

import { PartyPanelProps } from '../containers/PartyPanel';
import PartyPanelContents from './PartyPanelContents';

const PartyPanel: React.FC<PartyPanelProps> = (props) => {
  const handleClick = (): void => {
    // console.log(`PartyPanel Click! ${props.partyPanel.statusType.toString()}`);
    props.selectText(props.partyPanel.statusType, props.partyPanel.displayedStatus);
  };
  const { page } = props;
  const { date } = props;
  const { party } = props;
  const { sword } = props;
  const { equip } = props;

  const { partyPanel } = props;
  // console.log('Update Party');
  // console.log(`updatePartyPanel ${props.partyPanel.correct}`);

  // 結成の時に表示切替
  let extendView = false;
  if (
    partyPanel.enableExtendView &&
    page &&
    ((page.indexOf('party/') > -1 && page !== 'party/get_sally_party_info') ||
      (page.indexOf('equip/') > -1 && page !== 'equip/destroy'))
  ) {
    // console.log('in party', props.partyPanel.extendView);
    /*
    if (!props.partyPanel.extendView) {
      props.clickPartyProps(false);
    }
    */
    // console.log('in party', extendView);

    if (!extendView) {
      extendView = true;
    }
  } else if (extendView) {
    extendView = false;
  }
  // console.log('not party', extendView);

  const panelStyle = {
    extend: {
      height: 288,
      width: 715,
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
          partyData={party}
          swordData={sword}
          equipData={equip}
          extendView={extendView}
          partyPanel={partyPanel}
          date={date}
          onClick={handleClick}
        />
      </CardContent>
    </Card>
  );
};

export default PartyPanel;
