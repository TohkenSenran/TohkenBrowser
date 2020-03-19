import * as React from 'react';

import { Box, Checkbox, FormControlLabel, RadioGroup } from '@material-ui/core';

import { statusLabel, statusType } from '../../constants';
import { SelectViewStatusProps } from '../containers/SelectViewStatus';

const SelectViewStatus: React.FC<SelectViewStatusProps> = (props) => {
  const checks: JSX.Element[] = [];

  const [viewStatus, setViewStatus] =
    React.useState(props.displayedStatus);

  const handleChange = (target: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('viewStatus: %o', viewStatus);
    const tempViewStatus: boolean[] = { ...viewStatus };
    tempViewStatus[target] = event.target.checked;
    // console.log('viewStatus: %o', viewStatus);
    setViewStatus(tempViewStatus);
    props.setSelectViewStatus(tempViewStatus);
    // console.log('viewStatus: %o', viewStatus);
  };

  Object.entries(statusType).forEach(([key, value]) => {
    if ((typeof value === 'number') && value > 0) {
      // const onChange = () => { handleChange(value, viewStatus[value]); };
      checks.push(<Box>
        <FormControlLabel
          checked={viewStatus[value]}
          control={<Checkbox size="small" />}
          label={statusLabel[key]}
        />
      </Box>);
    }
  });

  return (
    <RadioGroup aria-label="position" >
      <Box display="flex" flexWrap="wrap" justifyContent="center" width="150px">
        {checks}
      </Box>
    </RadioGroup>
  );
};

export default SelectViewStatus;
