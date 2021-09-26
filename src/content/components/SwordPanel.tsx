import React from 'react';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { CustomTheme } from 'src/withRoot';
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

  const theme: CustomTheme = useTheme();
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
    textStyle = { ...textStyle, color: theme.tohkenPalette.general.alertText };
  }

  let boxStyle: React.CSSProperties = {
    background: theme.tohkenPalette.swordPanel.background,
    position: 'relative',
    width: 66,
    height: 66,
    padding: 3,
  };
  if (swordState.fatigueValue < 10) {
    boxStyle = {
      ...boxStyle,
      background:
        `linear-gradient(to top, ${theme.tohkenPalette.swordPanel.fatigueHigh}, ` +
        `${theme.tohkenPalette.swordPanel.background})`,
    };
  } else if (swordState.fatigueValue < 20) {
    boxStyle = {
      ...boxStyle,
      background:
        `linear-gradient(to top, ${theme.tohkenPalette.swordPanel.fatigueMiddle}, ` +
        `${theme.tohkenPalette.swordPanel.background})`,
    };
  } else if (swordState.fatigueValue >= 50) {
    boxStyle = {
      ...boxStyle,
      background:
        `linear-gradient(to top, ${theme.tohkenPalette.swordPanel.fatigueHigh} ,` +
        `${theme.tohkenPalette.swordPanel.background}, ` +
        `${theme.tohkenPalette.swordPanel.fatigueHigh})`,
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
