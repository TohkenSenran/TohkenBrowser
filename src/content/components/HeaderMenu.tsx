import React from 'react';

import { Box, AppBar, Toolbar } from '@material-ui/core';

import { headerMenuHeight } from '../../constants';
import { ModeButton } from './ModeButton';
import { MuteButton } from './MuteButton';
import { ScreenshotButton } from './ScreenshotButton';
import { ToastNotification } from './ToastNotification';
import { ReloadButton } from './ReloadButton';
import { DrawerMenu } from './DrawerMenu';
import { HandbookButton } from './HandbookButton';
import { Title } from './Title';

export const HeaderMenu: React.FC = () => (
  <>
    <AppBar position="fixed" style={{ boxShadow: 'none', height: headerMenuHeight }}>
      <Toolbar>
        <Box>{Title}</Box>
        <ReloadButton />
        <ScreenshotButton />
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
