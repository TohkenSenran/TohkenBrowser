import * as React from 'react';

import { Box, Tooltip, Typography } from '@material-ui/core';

import { requestType } from '../../background/states/requestType';
import { gameURL, twitterURL } from '../../constants';
import { sendMessageToBackground } from '../models/sendMessageToBackground';

const Title: React.FC = () => {
  const onTohkenClick = () => {
    sendMessageToBackground(requestType.openLinkOnTab, gameURL);
  };
  const onSenranClick = () => {
    sendMessageToBackground(requestType.openLinkOnTab, twitterURL);
  };

  return (
    <Box display="flex" flexDirection="row" flexWrap="nowrap">
      <Tooltip
        title="刀剣専覧Twitter"
        PopperProps={{ popperOptions: { modifiers: { offset: { enabled: true, offset: '0,-81' } } } }}
      >
        <Box>
          <Typography
            variant="h5"
            style={{ letterSpacing: '3px', margin: '0px 30px 0px 15px' }}
            onClick={onSenranClick}
          >
            {'刀剣専覧'}
          </Typography>
        </Box>
      </Tooltip>
    </Box>
  );
};
export default Title;

/*
 <Tooltip
        title="刀剣乱舞"
        PopperProps={{ popperOptions: { modifiers: { offset: { enabled: true, offset: '0,-81' } } } }}
      >
        <Box>
          <Typography
            variant="h5"
            style={{ letterSpacing: '3px', margin: '0px 0px 0px 15px' }}
            onClick={onTohkenClick}
          >
            {'刀剣'}
          </Typography>
        </Box>
      </Tooltip>
      <Tooltip
        title="専覧Twitter"
        PopperProps={{ popperOptions: { modifiers: { offset: { enabled: true, offset: '0,-81' } } } }}
      >
        <Box>
          <Typography
            variant="h5"
            style={{ letterSpacing: '3px', margin: '0px 30px 0px 0px' }}
            onClick={onSenranClick}
          >
            {'専覧'}
          </Typography>
        </Box>
      </Tooltip>

*/