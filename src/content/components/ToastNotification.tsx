import * as React from 'react';

import toastedNotes from 'toasted-notes';

import { Box, Button, Card, CardContent } from '@material-ui/core';
import { rootInitialState, RootState } from '../states';
import store from '../store';

// 過去の値との比較
let oldState: RootState = rootInitialState;
store.subscribe(() => {
    if ((oldState) &&
        (oldState.responseJson) &&
        (oldState.responseJson.date)) {
        console.log('前更新時刻', oldState.responseJson.date);
    }
    if ((store.getState()) &&
        (store.getState().responseJson) &&
        (store.getState().responseJson.date)) {
        console.log('現更新時刻', store.getState().responseJson.date);
    }

    if ((store.getState()) &&
        (store.getState().responseJson) &&
        (store.getState().responseJson.forge) &&
        (store.getState().responseJson.forge[1]) &&
        (store.getState().responseJson.forge[1].finished_at)) {
        console.log('更新後_終了時刻', store.getState().responseJson.forge[1].finished_at);
    }
    oldState = store.getState();
});

const CustomNotification: React.FC<{ onClick: () => void, imagePath: string, text: string }> = ({ onClick, imagePath, text }) => {
    return (
        <Card onClick={onClick} elevation={6} style={{
            position: 'relative',
            overflow: 'hidden',
            width: '180px',
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

const ToastNotification: React.FC = () => (
    <Button
        onClick={
            () => {
                toastedNotes.notify(
                    ({ onClose }) => <CustomNotification
                        onClick={onClose}
                        text={'手入れ\n完了'}
                        imagePath={chrome.extension.getURL('img/Setting/Swords/4/Normal.png')}
                    />,
                    { position: 'bottom-right' },
                );
            }
        }
    >
        {'test'}
    </Button>
);

export default ToastNotification;
