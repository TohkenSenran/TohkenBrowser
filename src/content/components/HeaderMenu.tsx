import * as React from 'react';

import { Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { headerMenuHeight } from '../../constants';
import ModeButton from '../containers/ModeButton';
import MuteButton from '../containers/MuteButton';
import ScreenshotButton from '../containers/ScreenshotButton';
import ToastNotification from '../containers/ToastNotification';
import ReloadButton from './ReloadButton';

import DrawerMenu from './DrawerMenu';
import HandbookButton from './HandbookButton';
import Title from './Title';
import RecodeButton from './RecodeButton';

const HeaderMenu: React.FC = () => (
  <>
    <AppBar position="fixed" style={{ boxShadow: 'none', height: headerMenuHeight }}>
      <Toolbar>
        <Box>{Title}</Box>
        <ReloadButton />
        <ScreenshotButton />
        <RecodeButton />
        <MuteButton />
        <ModeButton />
        <ToastNotification />
        <span style={{ marginLeft: 'auto', marginRight: -15 }}>
          <HandbookButton />
          <DrawerMenu />
        </span>
      </Toolbar>
    </AppBar>
  </>
);

export default HeaderMenu;
