import * as React from 'react';

import { Card, CardContent } from '@material-ui/core';
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
    const partyPropClick = () => {
        props.clickPartyProps(props.partyPanel.viewProps);
        // console.log(`propClick ${props.partyPanel.viewProps}`);
    };
    const partyData: Parties = props.party;
    const swordData: Swords = props.sword;
    const equipData: Equips = props.equip;
    // console.log('Update Party');
    // console.log(`updatePartyPanel ${props.partyPanel.correct}`);
    const parties: JSX.Element[] = [];

    // 結成の時に表示切替
    if ((props.page) && (props.page.indexOf('party') > -1)) {
        console.log('in party');
        if (!props.partyPanel.viewProps) {
            props.clickPartyProps(false);
        }
    } else {
        console.log('not party');
        if (props.partyPanel.viewProps) {
            props.clickPartyProps(true);
        }
    }

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

        const partyState = partyConverter(partyData[i + 1], swordData, equipData, props.date);
        const firstState = props.partyPanel.viewProps ?
            partyState.memberLv : partyState.state;
        const secondState = props.partyPanel.viewProps ?
            partyState.memberScout : partyState.remainingTime;

        let firstStateStyle: React.CSSProperties = {
            marginLeft: 3,
            whiteSpace: 'nowrap',
        };
        let secondStateStyle: React.CSSProperties = {
            marginLeft: 3,
            whiteSpace: 'nowrap',
            letterSpacing: -1,
        };

        if (props.partyPanel.viewProps) {
            const totalScout: number = parseInt(partyState.memberScout.replace(/[^0-9^\.]/g, ''));
            firstStateStyle = { ...firstStateStyle, letterSpacing: -1 };
            if (totalScout < 320) {
                secondStateStyle = { ...secondStateStyle, color: 'navy' };
            } else if (totalScout < 500) {
                secondStateStyle = { ...secondStateStyle, color: 'darkorange' };
            } else {
                secondStateStyle = { ...secondStateStyle, color: 'crimson' };
            }
        } else {
            switch (partyState.state) {
                case '遠征中':
                    firstStateStyle = { ...firstStateStyle, color: '#9644E3' };
                    break;
                case '出陣中':
                    firstStateStyle = { ...firstStateStyle, color: '#A24E36' };
                    break;
            }
            secondStateStyle = { ...secondStateStyle };
        }

        // props内の配列のインデックスはjsonの影響で1からスタート
        const tempParty = (
            <div style={{ margin: '4.5px 0px' }}>
                <div
                    style={{ display: 'inline-block', height: 60, width: 72 }}
                >
                    <div style={{ fontStyle: 'bold' }}>
                        {partyState.name}
                    </div>
                    <div style={firstStateStyle}>
                        {firstState}
                    </div>
                    <div style={secondStateStyle}>
                        {secondState}
                    </div>
                </div>
                <div style={{ display: 'inline-block' }} onClick={handleClick}>
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
                    <div>
                        {parties}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default PartyPanel;
