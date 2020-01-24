import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { BrowserSettingAction } from '../actions/browserSetting';
import ScreenshotButton from '../components/ScreenshotButton';
import { BrowserSettingState } from '../states/BrowserSettingState';
import { RootState } from '../states/index';

type StateToProps = {
  addCopyright: boolean;
};

export type ScreenshotButtonProps = StateToProps;

const mapStateToProps = (state: RootState): StateToProps =>
  ({
    addCopyright: state.browserSetting.addCopyright,
  });

export default connect<StateToProps>(
  mapStateToProps,
)(ScreenshotButton);
