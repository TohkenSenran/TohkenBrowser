import * as React from 'react';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const IconFontButton: React.FC<{
    iconName: string;
    tooltipText: string;
    onClick?: () => void;
}> = ({ iconName, tooltipText, onClick }) => (
    <Tooltip
        title={tooltipText}
        PopperProps={
            {
                popperOptions: {
                    modifiers: {
                        offset: {
                            enabled: true,
                            offset: '0,-90',
                        },
                    },
                },
            }
        }
    >
        <IconButton onClick={onClick}>
            <Icon>{iconName}</Icon>
        </IconButton>
    </Tooltip >
);

export default IconFontButton;
