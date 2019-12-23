import * as React from 'react';

import Box from '@material-ui/core/Box';

import { swordConverter } from '../models/swordConverter';
import { speedCorrect, textType } from '../states/PartyPanelState';
import { Equips } from '../states/responseJson/Equip';
import { Swords } from '../states/responseJson/Sword';

const SwordPanel: React.FC<{
    swords: Swords;
    serialId: string | number | null;
    selectCorrect?: speedCorrect;
    selectTextType?: textType;
    horseDisable?: boolean;
    stateText?: string;
    equips?: Equips;

}> = ({ swords, serialId, selectCorrect, selectTextType, horseDisable, stateText, equips }) => {

    const swordState = swordConverter(
        swords,
        serialId,
        selectCorrect,
        selectTextType,
        horseDisable,
        stateText,
        equips,
    );

    let textStyle: React.CSSProperties = {
        position: 'absolute',
        left: '50%',
        top: '100%',
        letterSpacing: (swordState.selectStatus.indexOf('残り') === -1) ? '0em' : '-0.05em',
        transform: 'translateX(-50%) translateY(-95%)',
        whiteSpace: 'nowrap',
        color: 'black',
        textShadow: '1px 1px 0 #FFF, -1px -1px 0 #FFF,' +
            ' -1px 1px 0 #FFF, 1px -1px 0 #FFF,' +
            '  0px 1px 0 #FFF, 0px -1px 0 #FFF,' +
            ' -1px 0px 0 #FFF, 1px  0px 0 #FFF',
    };
    switch (swordState.selectStatus) {
        case '御守: 有':
        case '完了':
            textStyle = { ...textStyle, color: 'crimson' };
            break;
    }

    let boxStyle: React.CSSProperties = {
        background: '#E6E6E6',
        position: 'relative',
        width: 66,
        height: 66,
    };
    if (swordState.fatigueValue < 10) {
        boxStyle = { ...boxStyle, background: 'linear-gradient(to top, red, #E6E6E6 75%)' };
    } else if (swordState.fatigueValue < 20) {
        boxStyle = { ...boxStyle, background: 'linear-gradient(to top, orange, #E6E6E6 75%)' };
    } else if (swordState.fatigueValue >= 50) {
        boxStyle = { ...boxStyle, background: 'linear-gradient(to top, pink, white, pink)' };
    }

    return (
        <Box style={boxStyle}>
            <img height="60" width="60" style={{ margin: 3 }} src={swordState.imageURL} />
            <p style={textStyle}>{swordState.selectStatus}</p>
        </Box>
    );
};

export default SwordPanel;
