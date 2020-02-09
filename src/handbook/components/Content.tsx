// tslint:disable-next-line: import-name
import * as React from 'react';

import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { StyleRules } from '@material-ui/core/styles/withStyles';

import withRoot from '../../withRoot';
import TabMenu from './TabMenu';

// styles を定義
const styles = (): StyleRules =>
  createStyles(
    {
      root: {},
    },
  );

const Content: React.FC = () => (
  <TabMenu />
);

// withRoot で export
export default withRoot(withStyles(styles)(Content));
