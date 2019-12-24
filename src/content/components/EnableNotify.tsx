import * as React from 'react';

import { EnableNotifyProps } from '../containers/EnableNotify';
import { FormControlLabel, Switch } from '@material-ui/core';

const EnableNotify: React.FC<EnableNotifyProps> = (props) => {
    // console.log('switch状態', props.enableNotify);
    const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log('switch切替', event.target.checked);
        props.onChange(event.target.checked);
    };

    return (
        <FormControlLabel
            control={
                <Switch
                    checked={props.enableNotify}
                    onChange={handleChange()}
                    value="enableNotify"
                />
            }
            label={'通知機能'}
        />
    );
};

export default EnableNotify;
