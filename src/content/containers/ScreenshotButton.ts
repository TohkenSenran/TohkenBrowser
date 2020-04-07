import { connect } from 'react-redux';

import ScreenshotButton from '../components/ScreenshotButton';
import { RootState } from '../states/index';

type StateToProps = {
  addCopyright: boolean;
};

export type ScreenshotButtonProps = StateToProps;

const mapStateToProps = (state: RootState): StateToProps => ({
  addCopyright: state.browserSetting.addCopyright,
});

export default connect(mapStateToProps)(ScreenshotButton);
