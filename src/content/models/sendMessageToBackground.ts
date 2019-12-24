// 送信内容のインターフェース設定
export enum requestType {
  muteChange = 'muteChage',
  screenshot = 'screenshot',
  getCurrentWindowId = 'getCurrentWindowId',
  getDevConnectState = 'getDevConnectState',
  responseBody = 'responseBody',
  openLinkOnTab = 'openLinkOnTab',
}

export const sendMessageToBackground =
  (requestType: requestType, payload?: any, callback?: ((response: any) => void) | undefined): void => {
    chrome.runtime.sendMessage(
      {
        type: requestType,
        payload,
      },
      callback,
    );
  };
