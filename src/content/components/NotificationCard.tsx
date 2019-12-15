import * as React from 'react';

import { Box, Card, CardContent } from '@material-ui/core';

const NotificationCard: React.FC<{ onClick: () => void, imagePath: string, text: string }> =
    ({ onClick, imagePath, text }) => {
        return (
            <Card onClick={onClick} elevation={6} style={{
                position: 'relative',
                overflow: 'hidden',
                maxWidth: '240px',
                margin: '0.3rem',
            }}>
                <CardContent style={{ padding: 0 }}>
                    <Box display="flex" flexDirection="row" alignItems="center">
                        <Box>
                            <img width="60" height="60" src={imagePath} />
                        </Box>
                        <Box padding="1rem" alignItems="center">
                            {text}
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        );
    };

export default NotificationCard;
