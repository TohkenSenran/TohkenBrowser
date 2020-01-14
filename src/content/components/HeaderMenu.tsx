import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import { headerMenuHeight, twitterURL } from '../../constants';
import ModeButton from '../containers/ModeButton';
import MuteButton from '../containers/MuteButton';
import ToastNotification from '../containers/ToastNotification';
import IconFontButton from './IconFontButton';
import ReloadButton from './ReloadButton';
import ScreenshotButton from './ScreenshotButton';

import { requestType } from '../../background/states/requestType';
import { sendMessageToBackground } from '../models/sendMessageToBackground';
import DrawerMenu from './DrawerMenu';
import HandbookButton from './HandbookButton';

const HeaderMenu: React.FC = () => (
  <React.Fragment>
    <AppBar
      position="fixed"
      style={{ boxShadow: 'none', height: headerMenuHeight }}
    >
      <Toolbar>
        <Tooltip title="Twitter">
          <Typography
            variant="h5"
            style={{ letterSpacing: '3px', margin: '0px 30px 6px 15px' }}
            onClick={() => {
              sendMessageToBackground(requestType.openLinkOnTab, twitterURL);
            }}
          >
            {'刀剣専覧'}
          </Typography>
        </Tooltip>
        <ReloadButton />
        <ScreenshotButton />
        <MuteButton />
        <ModeButton />
        <ToastNotification />
        <span style={{ marginLeft: 'auto', marginRight: -15 }}>
          <HandbookButton />
          <IconFontButton iconName="history" tooltipText="履歴" />
          <DrawerMenu />
        </span>
      </Toolbar>
    </AppBar>
  </React.Fragment >
);

export default HeaderMenu;
