// 送信内容のインターフェース設定
export enum requestType {
  muteChange = 'muteChange',
  screenshot = 'screenshot',
  record = 'record',
  getCurrentWindowId = 'getCurrentWindowId',
  getDevConnectState = 'getDevConnectState',
  responseBody = 'responseBody',
  openLinkOnTab = 'openLinkOnTab',
  createHandbookWindow = 'createHandbookWindow',
  closeHandbookWindow = 'closeHandbookWindow',
}
