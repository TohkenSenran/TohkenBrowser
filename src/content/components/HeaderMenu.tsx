import * as React from 'react';

import { Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { headerMenuHeight } from '../../constants';
import ModeButton from '../containers/ModeButton';
import MuteButton from '../containers/MuteButton';
import ScreenshotButton from '../containers/ScreenshotButton';
import ToastNotification from '../containers/ToastNotification';
import IconFontButton from './IconFontButton';
import ReloadButton from './ReloadButton';

import DrawerMenu from './DrawerMenu';
import HandbookButton from './HandbookButton';
import Title from './Title';
import JsonLogger from './JsonLogger';

const HeaderMenu: React.FC = () => (
  <React.Fragment>
    <AppBar
      position="fixed"
      style={{ boxShadow: 'none', height: headerMenuHeight }}
    >
      <Toolbar>
        <Box>
          {Title}
        </Box>
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
