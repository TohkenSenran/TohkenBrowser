import * as React from 'react';

import { Icon, IconButton, Tooltip } from '@material-ui/core';
import { requestType, sendMessageToBackground } from '../models/sendMessageToBackground';

const ScreenshotButton: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [onShot, setOnShot] = React.useState(false);
    // let fromButton: boolean = false;

    const handleClick = () => {
        setOpen(false);
        setOnShot(true);
        // console.log('handleClick');
        // sendMessageToBackground(requestType.screenshot);

    };
    const handleTooltipClose = () => {
        // console.log('tooltipClose');
        setOpen(false);
        // console.log('onClose');
        // console.log('onShot', e.currentTarget.getAttribute('data-onShot'));
    };
    const handleTooltipOpen = () => {
        setOpen(true);
    };

    React.useEffect(() => {
        console.log('component update', onShot);
        if (onShot) {
            // console.log('screenShot!');

            // setTimeoutを使わないとスクリーンショットにtooltipが映り込む
            // スクリーンショットのタイミングがずれるため暫定処理
            setTimeout(() => {
                sendMessageToBackground(requestType.screenshot);
                setOnShot(false);
            }, 300);
        }
        // setOnShot(false);
        /*
        return () => {
            if (onShot) {
                // console.log('screenShot!');
                sendMessageToBackground(requestType.screenshot);
                setOnShot(false);
            }
        };
        */
    });

    return (
        <Tooltip
            title={'撮影'}
            onClose={handleTooltipClose}
            onOpen={handleTooltipOpen}
            open={open}
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
            <IconButton onClick={handleClick} data-onShot={onShot}>
                <Icon>{'camera_alt'}</Icon>
            </IconButton>
        </Tooltip >
    );
};

export default ScreenshotButton;
