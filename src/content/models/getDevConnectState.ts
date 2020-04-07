import { requestType } from '../../background/states/requestType';
import { sendMessageToBackground } from './sendMessageToBackground';

export const getDevConnectState: () => Promise<boolean> = () =>
  new Promise((resolve: (value: boolean) => void) => {
    sendMessageToBackground(requestType.getDevConnectState, 'getDevConnectState', (response) => {
      // console.log('checkBackgroundDevConnect');
      resolve(response);
    });
  });
