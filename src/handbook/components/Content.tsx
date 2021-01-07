// tslint:disable-next-line: import-name
import * as React from 'react';

import { createStyles, withStyles } from '@material-ui/core/styles/';
import { StyleRules } from '@material-ui/core/styles/withStyles';

import { withRoot } from '../../withRoot';
import { TabMenu } from './TabMenu';

// styles を定義
const styles = (): StyleRules =>
  createStyles({
    root: {},
  });

// withRoot で export
export const Content = withRoot(withStyles(styles)(() => <TabMenu />));
