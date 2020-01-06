import * as React from 'react';

import { Box, Card, CardContent, Fade } from '@material-ui/core';
import { partyMemberNo, partyNo } from '../../constants';
import { PartyPanelProps } from '../containers/PartyPanel';
import { partyConverter } from '../models/partyConverter';
import { Equips } from '../states/responseJson/Equip';
import { Parties } from '../states/responseJson/Party';
import { Swords } from '../states/responseJson/Sword';
import SelectSpeedCorrectMenu from './SelectSpeedCorrectMenu';
import SwordPanel from './SwordPanel';

const PartyPanel: React.FC<PartyPanelProps> = (props) => {
  const handleClick = () => {
    // console.log(`PartyPanel Click! ${props.partyPanel.textType.toString()}`);
    props.selectText(props.partyPanel.textType);
  };

  const partyData: Parties = props.party;
  const swordData: Swords = props.sword;
  const equipData: Equips = props.equip;
  // console.log('Update Party');
  // console.log(`updatePartyPanel ${props.partyPanel.correct}`);
  const parties: JSX.Element[] = [];

  // 結成の時に表示切替
  if (props.partyPanel.enableMemberStateView && (props.page) &&
    ((props.page.indexOf('party/') > -1) || (props.page.indexOf('equip/') > -1))) {
    // console.log('in party');
    if (!props.partyPanel.viewProps) {
      props.clickPartyProps(false);
    }
  } else {
    // console.log('not party');
    if (props.partyPanel.viewProps) {
      props.clickPartyProps(true);
    }
  }

  for (let i: number = 0; i < partyNo; i += 1) {
    const party: JSX.Element[] = [];
    for (let j: number = 0; j < partyMemberNo; j += 1) {
      // console.log(`partyName ${partyData[i + 1].party_name}`);
      party.push(<SwordPanel
        swords={swordData}
        serialId={partyData[i + 1].slot[j + 1].serial_id}
        selectCorrect={props.partyPanel.correct}
        selectTextType={props.partyPanel.textType}
        horseDisable={props.partyPanel.horseDisable}
        equips={equipData}
      />);
    }

    const partyState = partyConverter(partyData[i + 1], swordData, equipData, props.date);
    const firstStateStyle: React.CSSProperties = {
      display: 'block',
      whiteSpace: 'nowrap',
    };
    const secondStateStyle: React.CSSProperties = {
      display: 'block',
      letterSpacing: -1,
      whiteSpace: 'nowrap',
    };

    // 表示系を生成
    let partyFirstStyle: React.CSSProperties = { ...firstStateStyle };
    switch (partyState.state) {
      case '遠征中':
        partyFirstStyle = { ...firstStateStyle, color: '#9644E3' };
        break;
      case '出陣中':
        partyFirstStyle = { ...firstStateStyle, color: '#A24E36' };
        break;
    }

    const partyStateComponent: JSX.Element = (
      <Box>
        <Box style={partyFirstStyle}>
          {partyState.state}
        </Box>
        <Box style={secondStateStyle}>
          {partyState.remainingTime}
        </Box>
      </Box>
    );

    const memberFirstStyle: React.CSSProperties = { ...firstStateStyle, letterSpacing: -1 };
    let memberSecondStyle: React.CSSProperties = { ...secondStateStyle };
    const totalScout: number = parseInt(partyState.memberScout.replace(/[^0-9^\.]/g, ''));
    if (totalScout < 320) {
      memberSecondStyle = { ...secondStateStyle, color: 'navy' };
    } else if (totalScout < 500) {
      memberSecondStyle = { ...secondStateStyle, color: 'darkorange' };
    } else {
      memberSecondStyle = { ...secondStateStyle, color: 'crimson' };
    }

    const memberStateComponent: JSX.Element = (
      <Box>
        <Box style={memberFirstStyle}>
          {partyState.memberLv}
        </Box>
        <Box style={memberSecondStyle}>
          {partyState.memberScout}
        </Box>
      </Box>
    );

    // props内の配列のインデックスはjsonの影響で1からスタート
    const tempParty = (
      <Box onClick={handleClick} marginTop="4px" display="flex" flexDirection="row">
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
          <Fade in={!props.partyPanel.viewProps}>
            <Box display="flex">
              <React.Fragment />
            </Box>
          </Fade>
          <Fade in={props.partyPanel.viewProps}>
            <Box display="flex" flexWrap="wrap" position="absolute" top="0px" left="0px" width="100px">
              {memberStateComponent}
            </Box>
          </Fade>
        </Box>
      </Box>
    );
    parties.push(tempParty);
  }

  const partyPanel_NormalStyle: React.CSSProperties = { height: 288, width: 478 };
  const partyPanel_ExtendStyle: React.CSSProperties = { height: 288, width: 578 };
  const partyPanelStyle: React.CSSProperties = props.partyPanel.viewProps ?
    partyPanel_ExtendStyle : partyPanel_NormalStyle;

  return (
    <Card
      style={partyPanelStyle}
    >
      <CardContent style={{ padding: 0, margin: 6 }}>
        {parties}
      </CardContent>
    </Card>
  );
};

export default PartyPanel;
