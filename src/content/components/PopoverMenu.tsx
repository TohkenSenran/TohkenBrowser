import * as React from 'react';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import Popover from '@material-ui/core/Popover';

import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import EnableMemberStateView from '../containers/EnableMemberStateView';
import EnableNotify from '../containers/EnableNotify';
import ScaleList from '../containers/ScaleList';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3, 2),
    width: 162,
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
          <EnableNotify />
          <EnableMemberStateView />
        </ FormControl>
      </Popover>
    </React.Fragment >
  );
};

export default PopoverMenu;
