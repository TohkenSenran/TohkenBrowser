import * as React from 'react';

import { Box, Drawer, Icon, IconButton, Tooltip, Typography } from '@material-ui/core';
import { ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core';
import { FormControl, FormLabel } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ExpandMore from '@material-ui/icons/ExpandMore';

import EnableNotify from '../containers/EnableNotify';
import ScaleList from '../containers/ScaleList';
import SelectSpeedCorrect from '../containers/SelectSpeedCorrect';
import EnableExtendView from '../containers/EnableExtendView';

const useStyles = makeStyles(() =>
  createStyles({
    customWidth: {
      maxWidth: 144,
    },
  }),
);

const DrawerMenu: React.FC = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClick = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };

  const expansionStyle: React.CSSProperties = {
    border: 'solid',
    borderColor: 'gray',
    borderRadius: 0,
    borderWidth: '1px 0px',
    boxShadow: 'none',
  };
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
        <Box margin="15px" style={{ userSelect: 'none' }}>
          <Typography variant="h6">{'設定'}</Typography>
          <FormControl>
            <ScaleList />
            <Box marginTop="12px">
              <FormLabel style={{ fontSize: 12 }}>{'各種設定切替'}</FormLabel>
              <Tooltip title="鍛刀・手入の完了を通知" classes={{ tooltip: classes.customWidth }}>
                <Box>
                  <EnableNotify />
                </Box>
              </Tooltip>
              <Tooltip title="結成画面表示時に補助情報を表示" classes={{ tooltip: classes.customWidth }}>
                <Box>
                  <EnableExtendView />
                </Box>
              </Tooltip>
            </Box>
            <Box marginTop="12px">
              <ExpansionPanel style={expansionStyle}>
                <Tooltip
                  title="各男子の機動値について，レベルや疲労を考慮した値に補正"
                  classes={{ tooltip: classes.customWidth }}
                >
                  <ExpansionPanelSummary
                    style={{ padding: 0, fontSize: 16 }}
                    expandIcon={<ExpandMore />}
                  >
                    {'機動補正選択'}
                  </ExpansionPanelSummary>
                </Tooltip>
                <SelectSpeedCorrect />
              </ExpansionPanel>
            </Box>
          </ FormControl>
        </Box>
      </Drawer>
    </React.Fragment >
  );
};

export default DrawerMenu;
