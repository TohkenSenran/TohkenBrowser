import * as React from 'react';

import { Box, Drawer, FormControl, Icon, IconButton, Tooltip, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

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

  return (
    <Drawer anchor="right" open={menuOpen} onClose={menuClose} >
      <Box margin="15px" style={{ userSelect: 'none' }}>
        <Typography variant="h6">{'設定'}</Typography>
        <FormControl />
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
