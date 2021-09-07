import React from 'react';

import { store } from '../store';
import { withRoot } from '../../withRoot';
import { checkDevConnect } from '../actions/browserSetting';
import { getDevConnectState } from '../models/getDevConnectState';
import { HeaderMenu } from './HeaderMenu';
import { StatusView } from './StatusView';

const devConnectChecker = async (): Promise<void> => {
  const devConnected: boolean = await getDevConnectState();
  // console.log('get devConnected :', devConnected);
  store.dispatch(checkDevConnect(devConnected));
};

// withRoot で export
export const Content = withRoot(() => {
  // Contentの内容
  devConnectChecker();
  return (
    <div style={{ userSelect: 'none' }}>
      <HeaderMenu />
      <StatusView />
    </div>
  );
});
