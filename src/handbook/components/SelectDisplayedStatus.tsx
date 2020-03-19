import * as React from 'react';

import { Box, Checkbox, FormControlLabel } from '@material-ui/core';

import { statusLabel, statusType } from '../../constants';
import { SelectDisplayedStatusProps } from '../containers/SelectDisplayedStatus';

const SelectDisplayedStatus: React.FC<SelectDisplayedStatusProps> = (props) => {
  const checks: JSX.Element[] = [];

  const [viewStatus, setDisplayedStatus] =
    React.useState(props.displayedStatus);

  const handleChange = (target: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('viewStatus: %o', viewStatus);
    const tempDisplayedStatus: boolean[] = { ...viewStatus };
    tempDisplayedStatus[target] = event.target.checked;
    // console.log('viewStatus: %o', viewStatus);
    setDisplayedStatus(tempDisplayedStatus);
    props.selectDisplayedStatus(tempDisplayedStatus);
    // console.log('viewStatus: %o', viewStatus);
  };

  Object.entries(statusType).forEach(([key, value]) => {
    if (
      (typeof value === 'number') &&
      (value !== statusType.none) &&
      (value !== statusType.amulet)
    ) {
      // const onChange = () => { handleChange(value, viewStatus[value]); };
      checks.push(<Box>
        <FormControlLabel
          checked={viewStatus[value]}
          control={<Checkbox size="small" />}
          label={statusLabel[statusType[value]]}
        // onChange={handleChange(value)}
        />
      </Box>);
    }
  });

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" width="150px">
      {checks}
    </Box>
  );
};

export default SelectDisplayedStatus;
