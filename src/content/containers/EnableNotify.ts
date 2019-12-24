import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { BrowserSettingAction, setEnableNotify } from '../actions/browserSetting';
import EnableNotify from '../components/EnableNotify';
import { BrowserSettingState } from '../states/BrowserSettingState';
import { RootState } from '../states/index';

type StateToProps = {
    enableNotify: boolean;
};

type DispatchToProps = {
    onChange: (enableNotify: boolean) => void;
};

export type EnableNotifyProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps => (
    {
        enableNotify: state.browserSetting.enableNotify,
    }
);

const mapDispatchToProps = (dispatch: Dispatch<BrowserSettingAction>): DispatchToProps => (
    {
        onChange: (enableNotify: boolean) => {
            dispatch(setEnableNotify(enableNotify));
        },
    }
);

export default connect<StateToProps, DispatchToProps>(
    mapStateToProps,
    mapDispatchToProps,
)(EnableNotify);
