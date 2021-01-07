import * as React from 'react';

import { createStyles, withStyles } from '@material-ui/core/styles';
import { StyleRules } from '@material-ui/core/styles/withStyles';

import { store } from '../store';
import { withRoot } from '../../withRoot';
import { checkDevConnect } from '../actions/browserSetting';
import { getDevConnectState } from '../models/getDevConnectState';
import { HeaderMenu } from './HeaderMenu';
import { StatusView } from './StatusView';

// styles を定義
const styles = (): StyleRules => createStyles({ root: {} });

const devConnectChecker = async (): Promise<void> => {
  const devConnected: boolean = await getDevConnectState();
  // console.log('get devConnected :', devConnected);
  store.dispatch(checkDevConnect(devConnected));
};

// withRoot で export
export const Content = withRoot(
  withStyles(styles)(() => {
    // Contentの内容
    devConnectChecker();
    return (
      <div style={{ userSelect: 'none' }}>
        <HeaderMenu />
        <StatusView />
      </div>
    );
  }),
);
