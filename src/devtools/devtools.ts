const port: chrome.runtime.Port = chrome.runtime.connect({ name: 'devtools' });

// 刀剣のページから実行されるかをチェック
chrome.devtools.inspectedWindow.eval('document.baseURI', (targetPageUrl: string) => {
  port.postMessage({ targetPageUrl });
});

const getPage = (url: string): string => {
  let page: string = url.split('?')[0];
  page = page.slice(page.indexOf('/', page.indexOf('/', page.indexOf('/') + 1) + 1) + 1);
  return page;
};

chrome.devtools.network.onRequestFinished.addListener(
  (request: chrome.devtools.network.Request) => {
    if (request.request && request.request.url) {
      const { url } = request.request;
      // port.postMessage(request);
      if (url.indexOf('touken-ranbu.jp') !== -1 && url.indexOf('uid=') !== -1) {
        request.getContent((content: string) => {
          const json = JSON.parse(content);
          // jsonがnullになることがある
          if (json) {
            json.page = getPage(url);
            json.requestData = request.request.postData?.params;
            port.postMessage(json);
          }
        });
      }
    }
  },
);
