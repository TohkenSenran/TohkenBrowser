import * as React from 'react';

import { Box, Checkbox, FormControlLabel } from '@material-ui/core';

import { statusLabel } from '../../constants';
import { SelectViewStatusProps } from '../containers/SelectViewStatus';
import { initialSelectViewStatus, textType } from '../states/PartyPanelState';

const SelectViewStatus: React.FC<SelectViewStatusProps> = (props) => {
  const checks: JSX.Element[] = [];

  const [viewStatus, setViewStatus] =
    React.useState(props.selectViewStatus ? props.selectViewStatus : initialSelectViewStatus);

  const handleChange = (target: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('viewStatus: %o', viewStatus);
    const tempViewStatus: boolean[] = { ...viewStatus };
    tempViewStatus[target] = event.target.checked;
    // console.log('viewStatus: %o', viewStatus);
    setViewStatus(tempViewStatus);
    props.setSelectViewStatus(tempViewStatus);
    // console.log('viewStatus: %o', viewStatus);
  };

  Object.entries(textType).forEach(([key, value]) => {
    if ((typeof value === 'number') && value > 0) {
      // const onChange = () => { handleChange(value, viewStatus[value]); };
      checks.push(<Box>
        <FormControlLabel
          checked={viewStatus[value]}
          control={<Checkbox size="small" />}
          label={statusLabel[key]}
          onChange={handleChange(value)}
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

export default SelectViewStatus;
