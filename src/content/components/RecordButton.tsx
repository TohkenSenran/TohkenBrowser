/* eslint-disable object-curly-newline */
import React from 'react';

import { Box, Icon, IconButton, Tooltip } from '@material-ui/core';
import { requestType } from '../../background/states/requestType';
import { sendMessageToBackground } from '../models/sendMessageToBackground';

export const RecordButton: React.FC = () => {
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
        // console.log('send message');
        // captureVideo();
        sendMessageToBackground(requestType.record);
        setOnShot(false);
      }, 500);
    }
  }, [onShot]);

  return (
    <Box>
      <Tooltip
        title="録画"
        open={open}
        onClose={handleTooltipClose}
        onOpen={handleTooltipOpen}
        PopperProps={{
          popperOptions: { modifiers: { offset: { enabled: true, offset: '0,-90' } } },
        }}
      >
        <IconButton onClick={handleClick}>
          <Icon>videocam</Icon>
        </IconButton>
      </Tooltip>
    </Box>
  );
};
