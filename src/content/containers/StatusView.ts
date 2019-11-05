import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { BrowserSettingAction, changeViewMode, checkDevConnect, setNowDate } from '../actions/browserSetting';
import StatusView from '../components/StatusView';
import { BrowserSettingState, windowMode } from '../states/BrowserSettingState';
import { RootState } from '../states/index';

interface StateToProps {
    browserSetting: BrowserSettingState;
}

interface DispatchToProps {
    onClick: (mode: windowMode) => void;
    setNow: (date: number) => void;
}

export type StatusViewProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps => (
    {
        browserSetting: state.browserSetting,
    }
);

const mapDispatchToProps = (dispatch: Dispatch<BrowserSettingAction>): DispatchToProps => (
    {
        onClick: (mode: windowMode) => { dispatch(changeViewMode(mode)); },
        setNow: (date: number) => { dispatch(setNowDate(date)); },
    }
);

export default connect<StateToProps, DispatchToProps>(
    mapStateToProps,
    mapDispatchToProps,
)(StatusView);
