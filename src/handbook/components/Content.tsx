// tslint:disable-next-line: import-name
import * as React from 'react';

import { AppBar, Tab, Tabs } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { StyleRules } from '@material-ui/core/styles/withStyles';

import withRoot from '../../withRoot';
import ConquestTable from './ConquestTable';

// styles を定義
const styles = (): StyleRules =>
  createStyles(
    {
      root: {},
    },
  );

const Content: React.FC = () => {
  const [value, setValue] = React.useState('conquest');
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const TabPanels: React.FC<{ tabValue: string; }> = ({ tabValue }) => {
    let tabPanel: JSX.Element = (<React.Fragment />);
    switch (tabValue) {
      case 'conquest':
        tabPanel = (<ConquestTable />);
        break;
    }
    return tabPanel;
  };

  return (
    <div style={{ userSelect: 'none' }}>
      <AppBar position="sticky" style={{ boxShadow: 'none', borderBottom: 'solid 1px #E6E6E6' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab value="conquest" label="遠征情報一覧" />
        </Tabs>
      </AppBar>
      <TabPanels tabValue={value} />
    </div>
  );
};

// withRoot で export
export default withRoot(withStyles(styles)(Content));
