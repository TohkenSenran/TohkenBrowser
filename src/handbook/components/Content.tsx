import * as React from 'react';

import { Typography } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { StyleRules } from '@material-ui/core/styles/withStyles';

import withRoot from '../../withRoot';

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
    return (
      <div style={{ userSelect: 'none' }}>
        <Typography>便利帳</Typography>
      </div>
    );
  }
}

// withRoot で export
export default withRoot(withStyles(styles)(Content));
