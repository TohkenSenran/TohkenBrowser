import { Tooltip } from '@material-ui/core';
import * as React from 'react';
import { forgeNo } from '../../constants';
import { ForgePanelProps } from '../containers/ForgePanel';
import { forgeConverter } from '../models/forgeConverter';
import { forgeInitialState } from '../states/responseJson/Forge';

const boxStyle: React.CSSProperties = {
    background: '#E6E6E6',
    display: 'inline-block',
    height: 24, width: 66,
};

const textStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '100%',
    letterSpacing: '-0.05em',
    transform: 'translateX(-50%) translateY(-100%)',
    whiteSpace: 'nowrap',
    color: 'black',
    textShadow: '1px 1px 0 #FFF, -1px -1px 0 #FFF,' +
        ' -1px 1px 0 #FFF, 1px -1px 0 #FFF,' + '  0px 1px 0 #FFF, 0px -1px 0 #FFF,' +
        ' -1px 0px 0 #FFF, 1px  0px 0 #FFF',
};

const ForgePanel: React.FC<ForgePanelProps> = (props) => {
    const forges: JSX.Element[] = [];
    // console.log('Update Forge');
    // console.log('forge: %O', props.forge);
    // console.log('date: ', props.date);
    for (let i = 0; i < forgeNo; i += 1) {
        // console.log('forge: %O', props.forge[(i + 1).toString()]);
        // console.log('initForge: %O', forgeInitialState);
        const forgeState = forgeConverter(
            props.forge[(i + 1).toString()] ? props.forge[(i + 1).toString()] : forgeInitialState,
            props.date,
        );

        const color: string = forgeState.forgeColor;
        const colorStyle: React.CSSProperties = {
            background: color,
            position: 'relative',
            height: 18, width: 60,
            margin: 3,
        };
        // console.log(`forgeNo. ${i + 1} remainingTime: ${forgeState.remainingTime}`);
        forges.push(
            <div style={boxStyle}>
                <Tooltip title={forgeState.swordName}>
                    <div style={colorStyle}>
                        <p style={textStyle}>{forgeState.remainingTime}</p>
                    </div>
                </Tooltip>
            </div>,
        );
    }
    return (
        <div style={{ height: 42 }}>
            <div style={{ margin: '0px 3px', height: 18 }}>鍛刀部屋</div>
            {forges}
        </div>
    );
};

export default ForgePanel;
