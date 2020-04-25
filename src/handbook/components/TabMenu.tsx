// tslint:disable-next-line: import-name
import * as React from 'react';

import { AppBar, Tab, Tabs } from '@material-ui/core';

import ConquestTable from '../containers/ConquestTable';
import HomeSwordsTable from '../containers/HomeSwordsTable';
import HistoryTable from '../containers/HistoryTable';
import { tabType } from '../../constants';
import { TabMenuProps } from '../containers/TabMenu';

const TabMenu: React.FC<TabMenuProps> = (props) => {
  const { tabMenu } = props;
  // const initialTabType = tabType[tabMenu.tabType.toString() as keyof typeof tabType];
  const [value, setValue] = React.useState<tabType>(tabMenu.tabType);

  React.useEffect(() => {
    // Update the document title using the browser API
    // console.log(`propsType:${tabMenu.tabType}, stateType:${value}`);
    setValue(tabMenu.tabType);
  }, [tabMenu]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: tabType): void => {
    // console.log(`set TabMenu ${newValue}`);
    props.setTabMenu(newValue);
    // setValue(newValue);
  };

  const TabPanels: React.FC<{ tabValue: tabType }> = ({ tabValue }) => {
    let tabPanel: JSX.Element = <></>;
    switch (tabValue) {
      case tabType.homeSwords:
        tabPanel = <HomeSwordsTable />;
        break;
      case tabType.conquest:
        tabPanel = <ConquestTable />;
        break;
      case tabType.history:
        tabPanel = <HistoryTable />;
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
          <Tab value={tabType.homeSwords} label="本丸男子" />
          <Tab value={tabType.conquest} label="遠征情報" />
          <Tab value={tabType.history} label="活動記録" />
        </Tabs>
      </AppBar>
      <TabPanels tabValue={value} />
    </div>
  );
};

export default TabMenu;
