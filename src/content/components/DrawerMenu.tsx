import * as React from 'react';

import { Box, Divider, FormControl, Icon, IconButton, Popover, Drawer, Typography, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CheckHorseDisable from '../containers/CheckHorseDisable';
import EnableMemberStateView from '../containers/EnableMemberStateView';
import EnableNotify from '../containers/EnableNotify';
import ScaleList from '../containers/ScaleList';
import SelectSpeedCorrect from '../containers/SelectSpeedCorrect';

const DrawerMenu: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };

  return (
    <React.Fragment>
      <Tooltip
        title={'設定'}
        PopperProps={{ popperOptions: { modifiers: { offset: { enabled: true, offset: '0,-90' } } } }}
      >
        <IconButton onClick={handleClick}>
          <Icon>menu</Icon>
        </IconButton>
      </Tooltip>

      <Drawer anchor="right" open={open} onClose={handleClose} >
        <Box margin="15px">
          <Typography variant="h6">{'設定'}</Typography>
          <FormControl>
            <ScaleList />
            <Box marginTop="6px">
              <EnableNotify />
            </Box>
            <Box marginTop="6px">
              <SelectSpeedCorrect />
            </Box>
          </ FormControl>
        </Box>
      </Drawer>
    </React.Fragment >
  );
};

export default DrawerMenu;
