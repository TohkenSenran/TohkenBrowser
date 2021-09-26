import { tabType, toneMode } from '../../constants';

export type TabMenuState = {
  tabType: tabType;
  colorTone: toneMode;
};

export const tabMenuInitialState: TabMenuState = {
  tabType: tabType.homeSwords,
  colorTone: toneMode.LIGHT,
};
