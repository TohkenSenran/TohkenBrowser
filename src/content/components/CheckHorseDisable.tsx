import * as React from 'react';

import { Checkbox, FormControlLabel } from '@material-ui/core/';
import { CheckHorseDisableProps } from '../containers/CheckHorseDisable';

const CheckHorseDisable: React.FC<CheckHorseDisableProps> = (props) => {

    const handleChange = () => {
        props.checkHorseDisable(props.horseDisable);
    };
    return (
        <FormControlLabel
            control={<Checkbox checked={props.horseDisable} onChange={handleChange} />}
            label="市街/屋内戦"
        />
    );
};

export default CheckHorseDisable;
