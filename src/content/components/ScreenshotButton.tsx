import * as React from 'react';
import { requestType, sendMessageToBackground } from '../models/sendMessageToBackground';
import IconFontButton from './IconFontButton';

const ScreenshotButton: React.FC = () => {
    const handleClick = () => {
        sendMessageToBackground(
            requestType.screenshot,
        );
    };
    return (
        <IconFontButton iconName="camera_alt" tooltipText="撮影" onClick={handleClick} />
    );
};

export default ScreenshotButton;
