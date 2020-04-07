import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { BrowserSettingActions, changeMute } from '../actions/browserSetting';
import MuteButton from '../components/MuteButton';
import { BrowserSettingState } from '../states/BrowserSettingState';
import { RootState } from '../states/index';

type StateToProps = {
  browserSetting: BrowserSettingState;
};

type DispatchToProps = {
  onClick: (mute: boolean) => void;
};

export type MuteButtonProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps => ({
  browserSetting: state.browserSetting,
});

const mapDispatchToProps = (dispatch: Dispatch<BrowserSettingActions>): DispatchToProps => ({
  onClick: (mute: boolean): void => {
    dispatch(changeMute(mute));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MuteButton);
