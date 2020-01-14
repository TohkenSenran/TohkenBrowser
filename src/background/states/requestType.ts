// 送信内容のインターフェース設定
export enum requestType {
  muteChange = 'muteChage',
  screenshot = 'screenshot',
  getCurrentWindowId = 'getCurrentWindowId',
  getDevConnectState = 'getDevConnectState',
  responseBody = 'responseBody',
  openLinkOnTab = 'openLinkOnTab',
  createHandbookWindow = 'createHandbookWindow',
  closeHandbookWindow = 'closeHandbookWindow',
}