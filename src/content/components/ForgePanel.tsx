import React from 'react';
import { useSelector } from 'react-redux';

import { Tooltip } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { CustomTheme } from 'src/withRoot';
import { forgeNo } from '../../constants';
import { RootState } from '../states/index';
import { Forges, forgeInitialState } from '../states/responseJson/Forge';
import { forgeConverter } from '../models/forgeConverter';

export const ForgePanel: React.FC = () => {
  const theme: CustomTheme = useTheme();

  const boxStyle: React.CSSProperties = {
    background: 'rgba(127, 127, 127, 0.25)',
    display: 'inline-block',
    height: 24,
    width: 66,
  };

  const textStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '100%',
    letterSpacing: '-0.05em',
    transform: 'translateX(-50%) translateY(-100%)',
    whiteSpace: 'nowrap',
    textShadow:
      ` 1px  1px 0 ${theme.palette.background.paper},` +
      `-1px -1px 0 ${theme.palette.background.paper},` +
      `-1px  1px 0 ${theme.palette.background.paper},` +
      ` 1px -1px 0 ${theme.palette.background.paper},` +
      ` 0px  1px 0 ${theme.palette.background.paper},` +
      ` 0px -1px 0 ${theme.palette.background.paper},` +
      `-1px  0px 0 ${theme.palette.background.paper},` +
      ` 1px  0px 0 ${theme.palette.background.paper}`,
  };

  const date = useSelector<RootState, number>((state) => state.responseJson.newDate);
  const forge = useSelector<RootState, Forges>((state) => state.responseJson.forge);

  const forges: React.ReactElement[] = [];
  // console.log('Update Forge');
  // console.log('forge: %O', props.forge);
  // console.log('date: ', props.date);
  for (let i = 0; i < forgeNo; i += 1) {
    // console.log('forge: %O', props.forge[i + 1]);
    // console.log('initForge: %O', forgeInitialState);
    const forgeState = forgeConverter(forge[i + 1] ? forge[i + 1] : forgeInitialState, date);

    const color: string = forgeState.forgeColor;
    const colorStyle: React.CSSProperties = {
      background: color,
      position: 'relative',
      height: 18,
      width: 60,
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
