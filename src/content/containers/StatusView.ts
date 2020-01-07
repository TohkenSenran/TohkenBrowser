import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { BrowserSettingAction, changeViewMode } from '../actions/browserSetting';
import { ResponseJsonAction, updateDate } from '../actions/responseJson';

import StatusView from '../components/StatusView';
import { BrowserSettingState, windowMode } from '../states/BrowserSettingState';
import { RootState } from '../states/index';
import { ResponseJsonState } from '../states/ResponseJsonState';

interface StateToProps {
  browserSetting: BrowserSettingState;
}

interface DispatchToProps {
  onClick: (mode: windowMode) => void;
  updateDate: (date: number) => void;
}

export type StatusExtendView = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps =>
  ({
    browserSetting: state.browserSetting,
  });

const mapDispatchToProps = (
  dispatch: Dispatch<BrowserSettingAction | ResponseJsonAction>,
): DispatchToProps =>
  ({
    onClick: (mode: windowMode) => {
      dispatch(changeViewMode(mode));
    },
    updateDate: (date: number) => {
      dispatch(updateDate(date));
    },
  });

export default connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(StatusView);
