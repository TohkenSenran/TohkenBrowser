import * as React from 'react';

import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

import { gameSize, headerMenuHeight, statusViewHeight } from '../../constants';
import PartyPanel from '../containers/PartyPanel';
import { StatusExtendView } from '../containers/StatusView';
import { windowMode } from '../states/BrowserSettingState';
import HomePanel from './HomePanel';

const StatusView: React.FC<StatusExtendView> = (props) => {
  // console.log('View Update');
  React.useEffect(() => {
    // 10秒ごとに更新
    const intervalId: number = window.setInterval(
      () => {
        props.updateDate(Date.now());
        // console.log(`interval: ${props.browserSetting.date}`);
      },
      10000,
    );
    return () => clearInterval(intervalId); // console.log('unmounting StatusView');
  });

  const topPos = headerMenuHeight + props.browserSetting.scale * gameSize.height;
  // Fadeでの表示変更はimportしたものには効かない可能性あり
  if (props.browserSetting.mode === windowMode.SHOU) {
    return (
      <Box
        bgcolor="background.paper"
        style={{ position: 'fixed', top: topPos, width: '100%', height: '100%' }}
      >
        <div style={{ position: 'relative' }}>
          <Fade in={!props.browserSetting.devConnect}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              style={{ height: statusViewHeight }}
            >
              <Box>
                <Typography variant="h5">
                  <div>{'[Ctrl + Shift + I] もしくは [F12]'}</div>
                  <div>{'または右クリックから [検証(I)]'}</div>
                </Typography>
                <Box padding={1}>
                  <Typography>
                    <div>{'上記の方法でデベロッパーツールを起動してください。'}</div>
                    <div>{'刀剣男子などの情報表示の更新に必要です。'}</div>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Fade>
          <Fade in={props.browserSetting.devConnect}>
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
  return (<React.Fragment />);
};

export default StatusView;
