/* eslint-disable object-curly-newline */
import React from 'react';

import { Box, Divider, Fade, Tooltip } from '@material-ui/core';

import { partyMemberNo, partyNo } from '../../constants';
import { partyConverter } from '../models/partyConverter';
import { PartyPanelState } from '../states/PartyPanelState';
import { Equips } from '../states/responseJson/Equip';
import { Parties } from '../states/responseJson/Party';
import { Swords } from '../states/responseJson/Sword';
import { SwordPanel } from './SwordPanel';

export const PartyPanelContents: React.FC<{
  partyData: Parties;
  swordData: Swords;
  equipData: Equips;
  extendView: boolean;
  partyPanel: PartyPanelState;
  date: number;
  onClick: () => void;
}> = ({ partyData, swordData, equipData, extendView, partyPanel, date, onClick }) => {
  const parties: React.ReactElement[] = [];

  for (let i = 0; i < partyNo; i += 1) {
    const party: React.ReactElement[] = [];
    for (let j = 0; j < partyMemberNo; j += 1) {
      // console.log(`partyName ${partyData[i + 1].party_name}`);
      party.push(
        <SwordPanel
          swords={swordData}
          serialId={partyData[i + 1].slot[j + 1].serial_id}
          selectCorrect={partyPanel.correct}
          selectTextType={partyPanel.statusType}
          horseDisable={partyPanel.horseDisable}
          equips={equipData}
        />,
      );
    }

    const partyState = partyConverter(partyData[i + 1], swordData, equipData, date);

    const textStyle: React.CSSProperties = {
      display: 'block',
      whiteSpace: 'pre',
    };

    let partyStateStyle: React.CSSProperties = { ...textStyle };
    const remainingTimeStyle: React.CSSProperties = { ...textStyle, letterSpacing: -1 };

    // 状態に合わせて表示色を変更
    switch (partyState.state) {
      case '遠征中':
        partyStateStyle = { ...partyStateStyle, color: '#9644E3' };
        break;
      case '出陣中':
        partyStateStyle = { ...partyStateStyle, color: '#A24E36' };
        break;
      default:
        break;
    }

    const partyStateComponent: React.ReactElement = (
      <Box>
        <Box style={partyStateStyle}>{partyState.state}</Box>
        <Box style={remainingTimeStyle}>{partyState.remainingTime}</Box>
      </Box>
    );
    const memberLvStyle: React.CSSProperties = { ...textStyle };
    let memberScoutStyle: React.CSSProperties = { ...textStyle, marginLeft: '6px' };
    const totalScout: number = parseInt(partyState.memberScout.replace(/[^0-9^\\.]/g, ''), 10);
    if (totalScout < 320) {
      memberScoutStyle = { ...memberScoutStyle, color: 'royalblue' };
    } else if (totalScout < 500) {
      memberScoutStyle = { ...memberScoutStyle, color: 'darkorange' };
    } else {
      memberScoutStyle = { ...memberScoutStyle, color: 'crimson' };
    }
    let memberFatigueStyle: React.CSSProperties = { ...textStyle, marginLeft: '6px' };
    const averageFatigue: number = parseInt(
      partyState.memberFatigue.replace(/[^0-9^\\.]/g, ''),
      10,
    );
    if (averageFatigue >= 50) {
      memberFatigueStyle = { ...memberFatigueStyle, color: 'deeppink' };
    }

    const edoJoTips: React.ReactElement = (
      <Box style={{ whiteSpace: 'pre' }}>
        {'江戸城内のマップ切替\n長距離：320未満\n中距離：500未満\n短距離：500以上'}
      </Box>
    );
    const conquestTips: React.ReactElement = (
      <Box style={{ whiteSpace: 'pre' }}>
        {'英気（疲労度）の\n平均が遠征大成功\n確率（*未確定）'}
      </Box>
    );

    const memberStateComponent: React.ReactElement = (
      <Box>
        <Divider />
        <Box display="flex" alignItems="center" height="66px">
          <Box width="72px" style={memberLvStyle}>
            {partyState.memberLv}
          </Box>
          <Tooltip title={edoJoTips}>
            <Box width="72px" style={memberScoutStyle}>
              {partyState.memberScout}
            </Box>
          </Tooltip>
          <Tooltip title={conquestTips}>
            <Box width="72px" style={memberFatigueStyle}>
              {partyState.memberFatigue}
            </Box>
          </Tooltip>
        </Box>
        <Divider />
      </Box>
    );

    const textShadow: string =
      '  1px 1px 0 rgba(255,255,255,0.75), -1px -1px 0 rgba(255,255,255,0.75),' +
      ' -1px 1px 0 rgba(255,255,255,0.75),  1px -1px 0 rgba(255,255,255,0.75),' +
      '  0px 1px 0 rgba(255,255,255,0.75),  0px -1px 0 rgba(255,255,255,0.75),' +
      ' -1px 0px 0 rgba(255,255,255,0.75),  1px  0px 0 rgba(255,255,255,0.75)';
    const memberStateCompactComp: React.ReactElement = (
      <Box>
        <Box display="flex" alignItems="center" height="66px">
          <Box width="72px" style={memberLvStyle}>
            {partyState.memberLv}
          </Box>
          <Box width="72px" style={{ ...memberScoutStyle, textShadow }}>
            {partyState.memberScout}
          </Box>
          <Box width="72px" style={{ ...memberFatigueStyle, textShadow }}>
            {partyState.memberFatigue}
          </Box>
        </Box>
      </Box>
    );

    const tempParty = (
      <Box onClick={onClick} marginTop="4px" display="flex" flexDirection="row">
        <Box height="66px" width="70px" padding="3px 0px">
          <Tooltip title={memberStateCompactComp} placement="right">
            <Box>
              <Box marginBottom="1px" fontStyle="bold" display="block">
                {partyState.name}
              </Box>
              <Box marginLeft="3px">{partyStateComponent}</Box>
            </Box>
          </Tooltip>
        </Box>
        <Box display="flex" flexDirection="row">
          {party}
        </Box>
        <Box position="relative">
          <Fade in={!extendView}>
            <Box display="flex">
              <></>
            </Box>
          </Fade>
          <Fade in={extendView}>
            <Box
              display="flex"
              flexWrap="wrap"
              position="absolute"
              top="0px"
              left="0px"
              marginLeft="9px"
            >
              {memberStateComponent}
            </Box>
          </Fade>
        </Box>
      </Box>
    );
    parties.push(tempParty);
  }

  return <>{parties}</>;
};
