import React from 'react';

import { Box, Card, CardContent, useTheme } from '@material-ui/core';
import { CustomTheme } from 'src/withRoot';

export const NotificationCard: React.FC<{
  onClick: () => void;
  imagePath: string;
  text: string;
}> = ({ onClick, imagePath, text }) => {
  const theme: CustomTheme = useTheme();

  const cardStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '240px',
  };

  const boxStyle: React.CSSProperties = {
    background: theme.tohkenPalette.swordPanel.background,
    width: 66,
    height: 66,
    padding: 3,
  };

  return (
    <Card onClick={onClick} elevation={6} style={cardStyle}>
      <CardContent style={{ padding: 0 }}>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box style={boxStyle}>
            <img width="60" height="60" src={imagePath} alt="" />
          </Box>
          <Box padding="0 1rem" alignItems="center" whiteSpace="pre" style={{ fontSize: 16 }}>
            {text}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
