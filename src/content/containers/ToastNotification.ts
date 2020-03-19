import { connect } from 'react-redux';

import ToastNotification from '../components/ToastNotification';
import { RootState } from '../states/index';
import { ResponseJsonState } from '../states/ResponseJsonState';

interface StateToProps {
  enableNotify: boolean;
  responseJson: ResponseJsonState;
}

export type ToastNotificationProps = StateToProps;

const mapStateToProps = (state: RootState): StateToProps =>
  ({
    enableNotify: state.browserSetting.enableNotify,
    responseJson: state.responseJson,
  });

export default connect(
  mapStateToProps,
)(ToastNotification);
