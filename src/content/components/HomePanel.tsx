import * as React from 'react';

import { Card, CardContent } from '@material-ui/core';

import { DutyPanel } from './DutyPanel';
import { ForgePanel } from './ForgePanel';
import { RepairPanel } from './RepairPanel';

export const HomePanel: React.FC = () => (
  <Card style={{ height: 288, width: 276 }}>
    <CardContent style={{ padding: 0, margin: 6 }}>
      <ForgePanel />
      <RepairPanel />
      <DutyPanel />
    </CardContent>
  </Card>
);
