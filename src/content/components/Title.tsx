import React from 'react';

import { Box, Tooltip, Typography } from '@material-ui/core';

import { requestType } from '../../background/states/requestType';
import { twitterURL } from '../../constants';
import { sendMessageToBackground } from '../models/sendMessageToBackground';

export const Title: React.FC = () => {
  /*
  const onTohkenClick = (): void => {
    sendMessageToBackground(requestType.openLinkOnTab, gameURL);
  };
  */
  const onSenranClick = (): void => {
    sendMessageToBackground(requestType.openLinkOnTab, twitterURL);
  };

  return (
    <Box display="flex" flexDirection="row" flexWrap="nowrap">
      <Tooltip
        title="刀剣専覧Twitter"
        PopperProps={{
          popperOptions: { modifiers: { offset: { enabled: true, offset: '0,-81' } } },
        }}
      >
        <Box>
          <Typography
            variant="h5"
            style={{ letterSpacing: '3px', margin: '0px 30px 0px 15px' }}
            onClick={onSenranClick}
          >
            刀剣専覧
          </Typography>
        </Box>
      </Tooltip>
    </Box>
  );
};
