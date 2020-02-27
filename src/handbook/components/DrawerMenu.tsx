import * as React from 'react';

import { Box, Drawer, FormControl, Icon, IconButton, Tooltip, Typography } from '@material-ui/core';
import { ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SelectDisplayedStatus from '../containers/SelectDisplayedStatus';
import StatusCorrect from '../containers/StatusCorrect';

const useStyles = makeStyles(() =>
  createStyles({
    customWidth: {
      maxWidth: 144,
    },
  }),
);

const DrawerMenu: React.FC<{
  menuOpen: boolean;
  menuClose: () => void;
}> = ({ menuOpen, menuClose }) => {

  const classes = useStyles();

  const expansionStyle: React.CSSProperties = {
    marginTop: '3px',
    border: 'solid',
    borderColor: 'lightgray',
    borderRadius: 0,
    borderWidth: '1px 0px',
    boxShadow: 'none',
  };
  return (
    <Drawer anchor="right" open={menuOpen} onClose={menuClose} >
      <Box margin="15px" style={{ userSelect: 'none' }}>
        <Typography variant="h6">{'設定'}</Typography>
        <FormControl>
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
            <StatusCorrect />
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
            <SelectDisplayedStatus />
          </ExpansionPanel>
        </FormControl>
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
