import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { Card, CardContent } from '@material-ui/core';

import { PartyPanelActions, selectDisplayText } from '../actions/partyPanel';
import { RootState } from '../states/index';
import { PartyPanelState } from '../states/PartyPanelState';
import { Equips } from '../states/responseJson/Equip';
import { Parties } from '../states/responseJson/Party';
import { Swords } from '../states/responseJson/Sword';
import { PartyPanelContents } from './PartyPanelContents';

export const PartyPanel: React.FC = () => {
  const dispatch = useDispatch<Dispatch<PartyPanelActions>>();
  const page = useSelector<RootState, string>((state) => state.responseJson.page);
  const date = useSelector<RootState, number>((state) => state.responseJson.newDate);
  const party = useSelector<RootState, Parties>((state) => state.responseJson.party);
  const sword = useSelector<RootState, Swords>((state) => state.responseJson.sword);
  const equip = useSelector<RootState, Equips>((state) => state.responseJson.equip);
  const partyPanel = useSelector<RootState, PartyPanelState>((state) => state.partyPanel);

  const handleClick = (): void => {
    // console.log(`PartyPanel Click! ${props.partyPanel.statusType.toString()}`);
    dispatch(selectDisplayText(partyPanel.statusType, partyPanel.displayedStatus));
  };

  // console.log(`updatePartyPanel ${props.partyPanel.correct}`);

  // 結成の時に表示切替
  let extendView = false;
  if (
    partyPanel.enableExtendView &&
    page &&
    ((page.indexOf('party/') > -1 && page !== 'party/get_sally_party_info') ||
      (page.indexOf('equip/') > -1 && page !== 'equip/destroy'))
  ) {
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
