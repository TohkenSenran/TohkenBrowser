import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { BrowserSettingActions, changeViewMode } from '../actions/browserSetting';
import ModeButton from '../components/ModeButton';
import { BrowserSettingState, windowMode } from '../states/BrowserSettingState';
import { RootState } from '../states/index';

type StateToProps = {
  browserSetting: BrowserSettingState;
};

type DispatchToProps = {
  onClick: (mode: windowMode) => void;
};

export type ModeButtonProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps =>
  ({
    browserSetting: state.browserSetting,
  });

const mapDispatchToProps = (dispatch: Dispatch<BrowserSettingActions>): DispatchToProps =>
  ({
    onClick: (mode: windowMode) => {
      dispatch(changeViewMode(mode));
    },
  });

export default connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(ModeButton);
