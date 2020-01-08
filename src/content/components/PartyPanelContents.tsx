import * as React from 'react';

import { Box, Fade } from '@material-ui/core';

import { partyMemberNo, partyNo } from '../../constants';
import { partyConverter } from '../models/partyConverter';
import { PartyPanelState } from '../states/PartyPanelState';
import { Equips } from '../states/responseJson/Equip';
import { Parties } from '../states/responseJson/Party';
import { Swords } from '../states/responseJson/Sword';
import SwordPanel from './SwordPanel';

const PartyPanelContents: React.FC<{
  partyData: Parties,
  swordData: Swords,
  equipData: Equips,
  partyPanel: PartyPanelState,
  date: number,
  onClick: () => void,
}> =
  ({ partyData, swordData, equipData, partyPanel, date, onClick }) => {

    const parties: JSX.Element[] = [];

    for (let i: number = 0; i < partyNo; i += 1) {
      const party: JSX.Element[] = [];
      for (let j: number = 0; j < partyMemberNo; j += 1) {
        // console.log(`partyName ${partyData[i + 1].party_name}`);
        party.push(<SwordPanel
          swords={swordData}
          serialId={partyData[i + 1].slot[j + 1].serial_id}
          selectCorrect={partyPanel.correct}
          selectTextType={partyPanel.textType}
          horseDisable={partyPanel.horseDisable}
          equips={equipData}
        />);
      }

      const partyState = partyConverter(partyData[i + 1], swordData, equipData, date);

      let partyStateStyle: React.CSSProperties = {
        display: 'block',
        whiteSpace: 'nowrap',
      };
      const remainingTimeStyle: React.CSSProperties = {
        display: 'block',
        letterSpacing: -1,
        whiteSpace: 'nowrap',
      };

      // 状態に合わせて表示色を変更
      switch (partyState.state) {
        case '遠征中':
          partyStateStyle = { ...partyStateStyle, color: '#9644E3' };
          break;
        case '出陣中':
          partyStateStyle = { ...partyStateStyle, color: '#A24E36' };
          break;
      }

      const partyStateComponent: JSX.Element = (
        <Box>
          <Box style={partyStateStyle}>
            {partyState.state}
          </Box>
          <Box style={remainingTimeStyle}>
            {partyState.remainingTime}
          </Box>
        </Box>
      );

      const tempParty = (
        <Box onClick={onClick} marginTop="4px" display="flex" flexDirection="row">
          <Box height="66px" width="70px" padding="3px 0px">
            <Box marginBottom="1px" fontStyle="bold" display="block">
              {partyState.name}
            </Box>
            <Box marginLeft="3px">
              {partyStateComponent}
            </Box>
          </Box>
          <Box display="flex" flexDirection="row">
            {party}
          </Box>
          <Box position="relative">
            <Fade in={!partyPanel.extendView}>
              <Box display="flex">
                <React.Fragment />
              </Box>
            </Fade>
            <Fade in={partyPanel.extendView}>
              <Box display="flex" flexWrap="wrap" position="absolute" top="0px" left="0px" width="100px">
                {'拡張表示'}
              </Box>
            </Fade>
          </Box>
        </Box>
      );

      parties.push(tempParty);
    }

    return (
      <React.Fragment>
        {parties}
      </React.Fragment>
    );
  };

export default PartyPanelContents;
