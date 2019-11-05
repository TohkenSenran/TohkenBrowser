import * as React from 'react';

import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { StyleRules } from '@material-ui/core/styles/withStyles';

import withRoot from '../../withRoot';
import { checkDevConnect } from '../actions/browserSetting';
import StatusView from '../containers/StatusView';
import { getDevConnectState } from '../models/getDevConnectState';
import store from '../store';
import HeaderMenu from './HeaderMenu';

// styles を定義
const styles = (): StyleRules =>
  createStyles(
    {
      root: {},
    },
  );

class Content extends React.Component {
  /*
  public componentDidMount() {
    console.log('in DidMount');
  }
  public componentWillUnmount() {
    console.log('in WillUnmount');
  }
  */
  public render() {
    // console.log('Start Content!');
    const devConnectChecker = async () => {
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
