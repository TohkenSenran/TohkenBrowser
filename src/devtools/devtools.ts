const port: chrome.runtime.Port = chrome.runtime.connect({ name: 'devtools' });

chrome.devtools.inspectedWindow.eval(
  'document.baseURI',
  (targetPageUrl: string) => {
    port.postMessage({ targetPageUrl });
  },
);

chrome.devtools.network.onRequestFinished.addListener(
  (request: any) => {
    if ((request.request) && (request.request.url)) {
      const url: string = request.request.url;
      // port.postMessage(request);
      if ((url.indexOf('touken-ranbu.jp') !== -1) && (url.indexOf('uid=') !== -1)) {
        request.getContent((content: string, encoding: string) => {
          const json = JSON.parse(content);
          json.page = getPage(url);
          port.postMessage(json);
        });
      }
    }
  });

const getPage = (url: string): string => {
  let page: string = (url.split('?'))[0];
  page = page.slice(page.indexOf('/', page.indexOf('/', page.indexOf('/') + 1) + 1) + 1);
  return page;
};
