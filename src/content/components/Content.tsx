/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import * as React from 'react';

import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { StyleRules } from '@material-ui/core/styles/withStyles';

import store from '../store';

import { withRoot } from '../../withRoot';
import { checkDevConnect } from '../actions/browserSetting';
import StatusView from '../containers/StatusView';
import { getDevConnectState } from '../models/getDevConnectState';
import { HeaderMenu } from './HeaderMenu';

// styles を定義
const styles = (): StyleRules => createStyles({ root: {} });

class Content extends React.PureComponent {
  public render(): JSX.Element {
    // console.log('Start Content!');
    const devConnectChecker = async (): Promise<void> => {
      const devConnected: boolean = await getDevConnectState();
      // console.log('get devConnected :', devConnected);
      store.dispatch(checkDevConnect(devConnected));
    };
    devConnectChecker();

    return (
      <div style={{ userSelect: 'none' }}>
        <HeaderMenu />
        <StatusView />
      </div>
    );
  }
}

// withRoot で export
export default withRoot(withStyles(styles)(Content));
