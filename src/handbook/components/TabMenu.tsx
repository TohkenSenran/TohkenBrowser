// tslint:disable-next-line: import-name
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { AppBar, Tab, Tabs } from '@material-ui/core';

import { HandbookState } from '../states';
import { TabMenuState } from '../states/TabMenu';
import { TabMenuActions, setTabMenuType } from '../actions/tabMenu';
import { ConquestTable } from './ConquestTable';
import { HomeSwordsTable } from './HomeSwordsTable';
import { HistoryTable } from './HistoryTable';
import { tabType } from '../../constants';
import { SpecialThank } from './SpecialThanks';

export const TabMenu: React.FC = () => {
  const dispatch = useDispatch<Dispatch<TabMenuActions>>();
  const tabMenu = useSelector<HandbookState, TabMenuState>((state) => state.tabMenu);
  // const initialTabType = tabType[tabMenu.tabType.toString() as keyof typeof tabType];
  const [value, setValue] = React.useState<tabType>(tabMenu.tabType);

  React.useEffect(() => {
    // Update the document title using the browser API
    // console.log(`propsType:${tabMenu.tabType}, stateType:${value}`);
    setValue(tabMenu.tabType);
  }, [tabMenu]);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (event: React.ChangeEvent<{}>, newValue: tabType): void => {
    // console.log(`set TabMenu ${newValue}`);
    dispatch(setTabMenuType(newValue));
    // setValue(newValue);
  };

  const TabPanels: React.FC<{ tabValue: tabType }> = ({ tabValue }) => {
    // eslint-disable-next-line no-undef
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
      case tabType.thanks:
        tabPanel = <SpecialThank />;
        break;
      default:
        break;
    }
    return tabPanel;
  };

  return (
    <div style={{ userSelect: 'none' }}>
      <AppBar position="sticky" style={{ boxShadow: 'none' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab value={tabType.homeSwords} label="本丸男士" />
          <Tab value={tabType.conquest} label="遠征情報" />
          <Tab value={tabType.history} label="活動記録" />
          <Tab value={tabType.thanks} label="謝辞" />
        </Tabs>
      </AppBar>
      <TabPanels tabValue={value} />
    </div>
  );
};
