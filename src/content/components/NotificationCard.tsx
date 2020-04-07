import * as React from 'react';

import { Box, Card, CardContent } from '@material-ui/core';

const NotificationCard: React.FC<{ onClick: () => void; imagePath: string; text: string }> = ({
  onClick,
  imagePath,
  text,
}) => {
  const cardStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '240px',
    margin: '0.3rem',
  };

  const boxStyle: React.CSSProperties = {
    background: '#E6E6E6',
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

export default NotificationCard;
