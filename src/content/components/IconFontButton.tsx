import React from 'react';

import { Icon, IconButton, Tooltip } from '@material-ui/core';

export const IconFontButton: React.FC<{
  iconName: string;
  tooltipText: string;
  onClick?: () => void;
  disabled?: boolean;
}> = ({ iconName, tooltipText, onClick, disabled = false }) => (
  <Tooltip
    title={tooltipText}
    PopperProps={{ popperOptions: { modifiers: { offset: { enabled: true, offset: '0,-90' } } } }}
  >
    <IconButton onClick={onClick} disabled={disabled}>
      <Icon>{iconName}</Icon>
    </IconButton>
  </Tooltip>
);
