import { requestType, sendMessageToBackground } from './sendMessageToBackground';

export const getCurrentWindowId: () => Promise<number> = () =>
    new Promise((resolve: (value: number) => void) => {
        sendMessageToBackground(
            requestType.getCurrentWindowId,
            'getCurrentWindowId',
            (response) => {
                // console.log(`startGetId ${response}`);
                if (response) {
                    resolve(response);
                }
            });
    });
