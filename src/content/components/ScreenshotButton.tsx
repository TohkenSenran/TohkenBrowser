import React from 'react';
import { useSelector } from 'react-redux';

import { Box, Icon, IconButton, Tooltip } from '@material-ui/core';

import { RootState } from '../states/index';
import { requestType } from '../../background/states/requestType';
import { sendMessageToBackground } from '../models/sendMessageToBackground';

export const ScreenshotButton: React.FC = () => {
  const showCopyright = useSelector<RootState, boolean>(
    (state) => state.browserSetting.showCopyright,
  );

  const [open, setOpen] = React.useState(false);
  const [onShot, setOnShot] = React.useState(false);

  const handleClick = (): void => {
    setOpen(false);
    setOnShot(true);
  };
  const handleTooltipClose = (): void => {
    // console.log('tooltipClose');
    setOpen(false);
  };
  const handleTooltipOpen = (): void => {
    setOpen(true);
  };

  React.useEffect(() => {
    // console.log('component update', onShot);
    if (onShot) {
      // setTimeoutを使わないとスクリーンショットにtooltipが映り込む
      // スクリーンショットのタイミングがずれるため暫定処理
      setTimeout(() => {
        sendMessageToBackground(requestType.screenshot, showCopyright);
        setOnShot(false);
      }, 500);
    }
  }, [onShot]);

  return (
    <Box>
      <Tooltip
        title="撮影"
        open={open}
        onClose={handleTooltipClose}
        onOpen={handleTooltipOpen}
        PopperProps={{
          popperOptions: { modifiers: { offset: { enabled: true, offset: '0,-90' } } },
        }}
      >
        <IconButton onClick={handleClick}>
          <Icon>camera_alt</Icon>
        </IconButton>
      </Tooltip>
    </Box>
  );
};
