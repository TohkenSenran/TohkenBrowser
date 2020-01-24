import * as React from 'react';

import { Box, Drawer, Icon, IconButton, Tooltip, Typography } from '@material-ui/core';
import { ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core';
import { FormControl, FormLabel } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ExpandMore from '@material-ui/icons/ExpandMore';

import EnableExtendView from '../containers/EnableExtendView';
import EnableNotify from '../containers/EnableNotify';
import ScaleList from '../containers/ScaleList';
import SelectSpeedCorrect from '../containers/SelectSpeedCorrect';
import SelectViewStatus from '../containers/SelectViewStatus';
import IconFontButton from './IconFontButton';
import AddCopyright from '../containers/AddCopyright';

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
    marginTop: '3px',
    border: 'solid',
    borderColor: 'lightgray',
    borderRadius: 0,
    borderWidth: '1px 0px',
    boxShadow: 'none',
  };
  return (
    <React.Fragment>
      <IconFontButton iconName="menu" tooltipText="設定" onClick={handleClick} />

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
              <Tooltip title="スクリーンショット撮影時にCopyrightを追加" classes={{ tooltip: classes.customWidth }}>
                <Box>
                  <AddCopyright />
                </Box>
              </Tooltip>
              <Tooltip title="結成画面表示時に補助情報を表示" classes={{ tooltip: classes.customWidth }}>
                <Box>
                  <EnableExtendView />
                </Box>
              </Tooltip>
            </Box>
            <Box marginTop="9px">
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
              <ExpansionPanel style={expansionStyle}>
                <Tooltip
                  title="部隊部分をクリックした際に表示されるステータスを選択"
                  classes={{ tooltip: classes.customWidth }}
                >
                  <ExpansionPanelSummary
                    style={{ padding: 0, fontSize: 16 }}
                    expandIcon={<ExpandMore />}
                  >
                    {'能力表示選択'}
                  </ExpansionPanelSummary>
                </Tooltip>
                <SelectViewStatus />
              </ExpansionPanel>
            </Box>
          </ FormControl>
        </Box>
      </Drawer>
    </React.Fragment >
  );
};

export default DrawerMenu;
