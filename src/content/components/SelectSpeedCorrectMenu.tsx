import * as React from 'react';

import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import Tooltip from '@material-ui/core/Tooltip';

import CheckHorseDisable from '../containers/CheckHorseDisable';
import SelectSpeedCorrect from '../containers/SelectSpeedCorrect';

const SelectSpeedCorrectMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  // tslint:disable-next-line:ter-indent
  const id = open ? 'select-speed-mode' : undefined;

  return (
    <React.Fragment>
      <Tooltip title="機動補正" placement="bottom-start" >
        <IconButton aria-describedby={id} onClick={handleClick} size="small">
          <Icon style={{ fontSize: 15 }}>settings</Icon>
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onMouseLeave={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <FormControl style={{ margin: 12 }}>
          <SelectSpeedCorrect />
          <Divider />
          <CheckHorseDisable />
        </FormControl>
      </Popover>
    </React.Fragment>
  );
};

export default SelectSpeedCorrectMenu;
