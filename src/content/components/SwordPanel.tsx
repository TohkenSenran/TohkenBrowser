import React from 'react';

import { Box, useMediaQuery } from '@material-ui/core';
import { Theme, useTheme } from '@material-ui/core/styles';

import { correctType, statusType } from '../../constants';
import { swordConverter } from '../models/swordConverter';
import { Equips } from '../states/responseJson/Equip';
import { Swords } from '../states/responseJson/Sword';

export const SwordPanel: React.FC<{
  swords: Swords;
  serialId: string | number | null;
  selectCorrect?: correctType;
  selectTextType?: statusType;
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

  const theme: Theme = useTheme();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  let textStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '98%',
    letterSpacing: swordState.selectStatus.indexOf('残り') === -1 ? '0em' : '-0.05em',
    transform: 'translateX(-50%) translateY(-95%)',
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
  if (swordState.selectStatus === '御守: 有' || swordState.selectStatus === '完了') {
    textStyle = { ...textStyle, color: 'crimson' };
  }

  let boxStyle: React.CSSProperties = {
    background: 'rgba(127, 127, 127, 0.25)',
    position: 'relative',
    width: 66,
    height: 66,
    padding: 3,
  };
  if (swordState.fatigueValue < 10) {
    boxStyle = {
      ...boxStyle,
      background: 'linear-gradient(to top, red, rgba(127, 127, 127, 0.25))',
    };
  } else if (swordState.fatigueValue < 20) {
    boxStyle = {
      ...boxStyle,
      background: 'linear-gradient(to top, orange, rgba(127, 127, 127, 0.25))',
    };
  } else if (swordState.fatigueValue >= 50) {
    boxStyle = {
      ...boxStyle,
      background: prefersDarkMode
        ? `linear-gradient(to top, #954c93, ${theme.palette.background.paper}, #954c93)`
        : `linear-gradient(to top, pink, ${theme.palette.background.paper}, pink)`,
    };
  }

  // console.log('themeColor ', useTheme().palette.background.paper);

  return (
    <Box style={boxStyle}>
      <Box bgcolor={theme.palette.background.paper} height="60" width="60">
        <img height="60" width="60" src={swordState.imageURL} alt="" />
        <p style={textStyle}>{swordState.selectStatus}</p>
      </Box>
    </Box>
  );
};
