import * as React from 'react';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const IconFontButton: React.FC<{
    iconName: string;
    tooltipText: string;
    onClick?: () => void;
}> = ({ iconName, tooltipText, onClick }) => (
    <IconButton onClick={onClick}>
        <Tooltip title={tooltipText}>
            <Icon>{iconName}</Icon>
        </Tooltip>
    </IconButton>
);

export default IconFontButton;
