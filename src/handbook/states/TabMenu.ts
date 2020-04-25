import { tabType } from '../../constants';

export type TabMenuState = {
  tabType: tabType;
};

export const tabMenuInitialState: TabMenuState = {
  tabType: tabType.homeSwords,
};
