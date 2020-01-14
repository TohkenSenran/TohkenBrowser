import { requestType } from '../../background/states/requestType';

export const sendMessageToBackground = (
  request: requestType,
  payload?: any,
  callback?: ((response: any) => void) | undefined,
): void => {
  chrome.runtime.sendMessage(
    {
      type: request,
      payload,
    },
    callback,
  );
};
