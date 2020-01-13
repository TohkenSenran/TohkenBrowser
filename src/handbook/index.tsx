import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Content from './components/Content';

import { windowBeforeUnloadEvent } from './models/windowBeforeUnloadEvent';
import { windowLoadEvent } from './models/windowLoadEvent';

import { setWindowTitle } from './models/setWindowTitle';

// 終了直前の処理
window.onbeforeunload = () => {
  windowBeforeUnloadEvent();
};

const startReactDom = async () => {
  setWindowTitle(document);
  const app = document.createElement('div');
  document.body.appendChild(app);
  ReactDOM.render(<Content />, app);
  // 過去の値を反映
  windowLoadEvent();
};

startReactDom();
