import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Items } from '../content/states/responseJson/Item';
import { setSeasonItems } from './actions/conquestTable';
import Content from './components/Content';
import { getSeasonReward } from './models/getSeasonReward';
import { setWindowTitle } from './models/setWindowTitle';
import { windowBeforeUnloadEvent } from './models/windowBeforeUnloadEvent';
import { windowLoadEvent } from './models/windowLoadEvent';
import store from './store';

// 終了直前の処理
window.onbeforeunload = () => {
  windowBeforeUnloadEvent();
};

const startReactDom = async () => {
  const seasonItems: Items = await getSeasonReward();
  // console.log('in startReactDom %o', seasonItems);
  if (seasonItems) {
    console.log('on dispatch %o', seasonItems);
    store.dispatch(setSeasonItems(seasonItems));
  }
  setWindowTitle(document);
  const app = document.createElement('div');
  document.body.appendChild(app);
  ReactDOM.render(<Provider store={store}><Content /></Provider>, app);
  // 過去の値を反映
  windowLoadEvent();
};

startReactDom();
