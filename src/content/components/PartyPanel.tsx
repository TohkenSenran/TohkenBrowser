import * as React from 'react';

import { Card, CardContent } from '@material-ui/core';
import { PartyPanelProps } from '../containers/PartyPanel';
import { partyConverter } from '../models/partyConverter';
import { Equips } from '../states/responseJson/Equip';
import { Parties } from '../states/responseJson/Party';
import { Swords } from '../states/responseJson/Sword';
import SelectSpeedCorrectMenu from './SelectSpeedCorrectMenu';
import SwordPanel from './SwordPanel';
import { partyNo, partyMemberNo } from '../../constants';

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
    for (let i: number = 0; i < partyNo; i += 1) {
        const party: JSX.Element[] = [];
        for (let j: number = 0; j < partyMemberNo; j += 1) {
            // console.log(`partyName ${partyData[i + 1].party_name}`);
            party.push(
                <div style={{ display: 'inline-block' }}>
                    <SwordPanel
                        swords={swordData}
                        serialId={partyData[i + 1].slot[j + 1].serial_id}
                        selectCorrect={props.partyPanel.correct}
                        selectTextType={props.partyPanel.textType}
                        horseDisable={props.partyPanel.horseDisable}
                        equips={equipData}
                    />
                </div>,
            );
        }
        const partyState = partyConverter(partyData[i + 1], props.date);
        // props内の配列のインデックスはjsonの影響で1からスタート
        const tempParty = (
            <div style={{ margin: '4.5px 0px' }}>
                <div style={{ display: 'inline-block', height: 60, width: 72 }}>
                    <div style={{ fontStyle: 'bold' }}>
                        {partyState.name}
                    </div>
                    <div style={partyState.stateStyle}>
                        {partyState.state}
                    </div>
                    <div style={{ marginLeft: 3, letterSpacing: -1 }}>
                        {partyState.remainingTime}
                    </div>
                </div>
                <div style={{ display: 'inline-block' }}>
                    {party}
                </div>
            </div>
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
                    <div onClick={handleClick}>
                        {parties}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default PartyPanel;
