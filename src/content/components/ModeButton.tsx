import * as React from 'react';
import IconTextButton from './IconTextButton';

import { ModeButtonProps } from '../containers/ModeButton';
import { windowMode } from '../states/BrowserSettingState';

const ModeButton: React.FC<ModeButtonProps> = (props) => {
    const handleClick = () => {
        props.onClick(props.browserSetting.mode);
    };

    switch (props.browserSetting.mode) {
        case windowMode.SEN:
            return (
                <IconTextButton iconText="専" tooltipText="専用" onClick={handleClick} />
            );
        case windowMode.SHOU:
            return (
                <IconTextButton iconText="詳" tooltipText="詳細" onClick={handleClick} />
            );
        case windowMode.HYOU:
            return (
                <IconTextButton iconText="標" tooltipText="標準" onClick={handleClick} />
            );
        default:
            return (
                <IconTextButton iconText="専" tooltipText="専用" onClick={handleClick} />
            );
    }
};

export default ModeButton;
