import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { Box, Fade, Typography } from '@material-ui/core';

import { ResponseJsonActions, updateDate } from '../actions/responseJson';
import { BrowserSettingState, windowMode } from '../states/BrowserSettingState';
import { RootState } from '../states/index';
import { gameSize, headerMenuHeight, statusViewHeight } from '../../constants';
import { PartyPanel } from './PartyPanel';
import { HomePanel } from './HomePanel';

export const StatusView: React.FC = () => {
  const dispatch = useDispatch<Dispatch<ResponseJsonActions>>();
  const browserSetting = useSelector<RootState, BrowserSettingState>(
    (state: RootState) => state.browserSetting,
  );

  // console.log('View Update');
  React.useEffect(() => {
    // 10秒ごとに更新
    const intervalId: number = window.setInterval(() => {
      dispatch(updateDate(Date.now()));
      // console.log(`interval: ${browserSetting.date}`);
    }, 10000);
    return (): void => clearInterval(intervalId); // console.log('unmounting StatusView');
  });

  const topPos = headerMenuHeight + browserSetting.scale * gameSize.height;
  // Fadeでの表示変更はimportしたものには効かない可能性あり
  if (browserSetting.mode === windowMode.SHOU) {
    return (
      <Box
        bgcolor="background.paper"
        style={{ position: 'fixed', top: topPos, width: '100%', height: '100%' }}
      >
        <div style={{ position: 'relative' }}>
          <Fade in={!browserSetting.devConnect}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              style={{ height: statusViewHeight }}
            >
              <Box>
                <Typography variant="h5">
                  <div>[Ctrl + Shift + I] もしくは [F12]</div>
                  <div>または右クリックから [検証(I)]</div>
                </Typography>
                <Box padding={1}>
                  <Typography>
                    <div>上記の方法でデベロッパーツールを起動してください。</div>
                    <div>刀剣男士などの情報表示の更新に必要です。</div>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Fade>
          <Fade in={browserSetting.devConnect}>
            <Box display="flex" flexWrap="wrap" style={{ position: 'absolute', top: 0, left: 0 }}>
              <Box style={{ margin: '6px' }}>
                <PartyPanel />
              </Box>
              <Box style={{ margin: '6px 0px' }}>
                <HomePanel />
              </Box>
            </Box>
          </Fade>
        </div>
      </Box>
    );
  }
  return <></>;
};
