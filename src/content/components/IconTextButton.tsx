import * as React from 'react';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const IconTextButton: React.FC<{
  iconText: string;
  tooltipText: string;
  onClick?: () => void;
}> = ({ iconText, tooltipText, onClick }) => (
  <Tooltip
    title={tooltipText}
    PopperProps={{
      popperOptions: {
        modifiers: { offset: { enabled: true, offset: '0,-90' } },
      },
    }}
  >
    <IconButton onClick={onClick}>
      <Box
        style={{
          minHeight: 24,
          minWidth: 24,
          maxHeight: 24,
          maxWidth: 24,
        }}
      >
        <Typography variant="h6" style={{ margin: '-4px 0px 0px 0px' }}>
          {iconText}
        </Typography>
      </Box>
    </IconButton>
  </Tooltip>
);

export default IconTextButton;
