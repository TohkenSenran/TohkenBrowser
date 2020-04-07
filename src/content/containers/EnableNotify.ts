import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { BrowserSettingActions, setEnableNotify } from '../actions/browserSetting';
import EnableNotify from '../components/EnableNotify';
import { RootState } from '../states/index';

type StateToProps = {
  enableNotify: boolean;
};

type DispatchToProps = {
  onChange: (enableNotify: boolean) => void;
};

export type EnableNotifyProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps => ({
  enableNotify: state.browserSetting.enableNotify,
});

const mapDispatchToProps = (dispatch: Dispatch<BrowserSettingActions>): DispatchToProps => ({
  onChange: (enableNotify: boolean): void => {
    dispatch(setEnableNotify(enableNotify));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EnableNotify);
