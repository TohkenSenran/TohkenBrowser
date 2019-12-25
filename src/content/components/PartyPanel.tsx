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
  if (false && (props.page) &&
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
      whiteSpace: 'nowrap',
      display: 'block',
    };
    const secondStateStyle: React.CSSProperties = {
      whiteSpace: 'nowrap',
      display: 'block',
      letterSpacing: -1,
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
      <Box onClick={handleClick} margin="4.5px 0px" display="flex" flexDirection="row">
        <Box height="66px" width="72px" padding="3px 0px">
          <Box marginBottom="1px" fontStyle="bold" display="block">
            {partyState.name}
          </Box>
          <Box marginLeft="3px" position="relative">
            <Fade in={!props.partyPanel.viewProps}>
              <Box display="flex">
                {partyStateComponent}
              </Box>
            </Fade>
            <Fade in={props.partyPanel.viewProps}>
              <Box display="flex" flexWrap="wrap" position="absolute" top="0px" left="0px">
                {memberStateComponent}
              </Box>
            </Fade>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row">
          {party}
        </Box>
      </Box>
    );
    parties.push(tempParty);
  }

  return (
    <Card
      style={{ background: 'white', width: 479, height: 288 }}
    >
      <CardContent style={{ padding: 0, marginTop: 6, marginLeft: 6 }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: -9, left: -9 }}>
            <SelectSpeedCorrectMenu />
          </div>
          <div>
            {parties}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PartyPanel;
