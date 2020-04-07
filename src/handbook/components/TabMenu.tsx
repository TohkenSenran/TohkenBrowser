// tslint:disable-next-line: import-name
import * as React from 'react';

import { AppBar, Tab, Tabs } from '@material-ui/core';

import ConquestTable from '../containers/ConquestTable';
import HomeSwordsTable from '../containers/HomeSwordsTable';

enum tabType {
  conquest = 'conquest',
  homeSwords = 'homeSwords',
}

const TabMenu: React.FC = () => {
  const [value, setValue] = React.useState(tabType.conquest);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: tabType): void => {
    setValue(newValue);
  };

  const TabPanels: React.FC<{ tabValue: tabType }> = ({ tabValue }) => {
    let tabPanel: JSX.Element = <></>;
    switch (tabValue) {
      case tabType.conquest:
        tabPanel = <ConquestTable />;
        break;
      case tabType.homeSwords:
        tabPanel = <HomeSwordsTable />;
        break;
      default:
        break;
    }
    return tabPanel;
  };

  return (
    <div style={{ userSelect: 'none' }}>
      <AppBar position="sticky" style={{ boxShadow: 'none', borderBottom: 'solid 1px #E6E6E6' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab value={tabType.conquest} label="遠征情報一覧" />
          <Tab value={tabType.homeSwords} label="本丸男子一覧" />
        </Tabs>
      </AppBar>
      <TabPanels tabValue={value} />
    </div>
  );
};

export default TabMenu;
