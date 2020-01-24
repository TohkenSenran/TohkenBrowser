import { contentRequest } from '../../content/states/contentRequest';

export const sendMessageToWindow = (
  tabId: number,
  request: contentRequest,
  payload?: any,
  callback?: ((response: any) => void) | undefined,
): void => {
  chrome.tabs.sendMessage(
    tabId,
    {
      type: request,
      payload,
    },
    callback,
  );
};
