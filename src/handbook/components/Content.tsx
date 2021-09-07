// tslint:disable-next-line: import-name
import React from 'react';

import { withRoot } from '../../withRoot';
import { TabMenu } from './TabMenu';

// withRoot で export
export const Content = withRoot(() => <TabMenu />);
