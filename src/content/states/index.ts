import { browserSettingInitialState, BrowserSettingState } from './BrowserSettingState';
import { partyPanelInitialState, PartyPanelState } from './PartyPanelState';
import { responseJsonInitialState, ResponseJsonState } from './ResponseJsonState';

export interface RootState {
  browserSetting: BrowserSettingState;
  partyPanel: PartyPanelState;
  responseJson: ResponseJsonState;
}

export const rootInitialState: RootState = {
  browserSetting: browserSettingInitialState,
  partyPanel: partyPanelInitialState,
  responseJson: responseJsonInitialState,
};
