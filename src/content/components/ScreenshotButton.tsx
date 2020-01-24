import * as React from 'react';

import { Box, Icon, IconButton, Tooltip } from '@material-ui/core';

import { requestType } from '../../background/states/requestType';
import { ScreenshotButtonProps } from '../containers/ScreenshotButton';
import { sendMessageToBackground } from '../models/sendMessageToBackground';

const ScreenshotButton: React.FC<ScreenshotButtonProps> = (props) => {
  // const [open, setOpen] = React.useState(false);
  // const [onShot, setOnShot] = React.useState(false);
  // let onShot: boolean = false;
  const handleClick = () => {
    // props.checkOnScreenshot(true);
    // console.log('screenshot!');

    sendMessageToBackground(requestType.screenshot, props.addCopyright);

    /*
    chrome.runtime.onMessage.addListener(({ type, payload }) => {
      // console.log('Get responseJson!');
      // console.log('forgeState before anlyse %O', store.getState().responseJson.forge);
      switch (type) {
        case contentRequest.screenshot:
          console.log('screenshot finish!');
          setOnShot(false);
          break;
      }
    });
  */

    // onShot = false;
    // setOpen(false);
    // setOnShot(true);
  };
  /*
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    if (onShot) {
      // console.log('screenShot!');

      // setTimeoutを使わないとスクリーンショットにtooltipが映り込む
      // スクリーンショットのタイミングがずれるため暫定処理
      setTimeout(() => {
        sendMessageToBackground(
          requestType.screenshot,
          'screenshot',
          (response: any) => {
            console.log('screenshot finish!');
            setOnShot(!response);
          },
        );
      }, 300);
    }
  });
  */
  return (
    <Box>
      <Tooltip
        title={'撮影'}
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
