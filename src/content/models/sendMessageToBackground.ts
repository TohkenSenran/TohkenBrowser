// 送信内容のインターフェース設定
export enum requestType {
  muteChange = 'muteChage',
  screenshot = 'screenshot',
  getCurrentWindowId = 'getCurrentWindowId',
  getDevConnectState = 'getDevConnectState',
  responseBody = 'responseBody',
  openLinkOnTab = 'openLinkOnTab',
  createHandbookWindow = 'createHandbookWindow',
}

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
