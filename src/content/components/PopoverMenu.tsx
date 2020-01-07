import * as React from 'react';

import { Box, Divider, FormControl, Icon, IconButton, Popover } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CheckHorseDisable from '../containers/CheckHorseDisable';
import EnableExtendView from '../containers/EnableExtendView';
import EnableNotify from '../containers/EnableNotify';
import ScaleList from '../containers/ScaleList';
import SelectSpeedCorrect from '../containers/SelectSpeedCorrect';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3, 2),
    width: 144,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

const PopoverMenu: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  // tslint:disable-next-line:ter-indent
  const id = open ? 'simple-popover' : undefined;

  return (
    <React.Fragment>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <Icon>more_vert</Icon>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <FormControl className={classes.formControl}>
          <ScaleList />
          <Box marginTop="6px">
            <EnableNotify />
          </Box>
          <Box marginTop="6px">
            <SelectSpeedCorrect />
            <Divider />
            <CheckHorseDisable />
          </Box>
        </ FormControl>
      </Popover>
    </React.Fragment >
  );
};

export default PopoverMenu;
