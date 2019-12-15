import { connect } from 'react-redux';

import ToastNotification from '../components/ToastNotification';
import { RootState } from '../states/index';
import { ResponseJsonState } from '../states/ResponseJsonState';

interface StateToProps {
    responseJson: ResponseJsonState;
}

export type ToastNotificationProps = StateToProps;

const mapStateToProps = (state: RootState): StateToProps => (
    {
        responseJson: state.responseJson,
    }
);

export default connect<StateToProps>(
    mapStateToProps,
)(ToastNotification);
