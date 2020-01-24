import * as React from 'react';

import { Box, Icon, IconButton, Tooltip } from '@material-ui/core';

import { requestType } from '../../background/states/requestType';
import { ScreenshotButtonProps } from '../containers/ScreenshotButton';
import { sendMessageToBackground } from '../models/sendMessageToBackground';

const ScreenshotButton: React.FC<ScreenshotButtonProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [onShot, setOnShot] = React.useState(false);

  const handleClick = () => {
    setOpen(false);
    setOnShot(true);
  };
  const handleTooltipClose = () => {
    // console.log('tooltipClose');
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    // console.log('component update', onShot);
    if (onShot) {
      // setTimeoutを使わないとスクリーンショットにtooltipが映り込む
      // スクリーンショットのタイミングがずれるため暫定処理
      setTimeout(() => {
        sendMessageToBackground(requestType.screenshot, props.addCopyright);
        setOnShot(false);
      }, 500);
    }
  }, [onShot]);

  return (
    <Box>
      <Tooltip
        title={'撮影'}
        open={open}
        onClose={handleTooltipClose}
        onOpen={handleTooltipOpen}
        PopperProps={{ popperOptions: { modifiers: { offset: { enabled: true, offset: '0,-90' } } } }}
      >
        <IconButton onClick={handleClick}>
          <Icon>{'camera_alt'}</Icon>
        </IconButton>
      </Tooltip >
    </Box>
  );
};

export default ScreenshotButton;
