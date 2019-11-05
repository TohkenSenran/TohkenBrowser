import { connect } from 'react-redux';

import RepairPanel from '../components/RepairPanel';
import { RootState } from '../states/index';
import { Repairs } from '../states/responseJson/Repair';
import { Swords } from '../states/responseJson/Sword';

interface StateToProps {
    date: number;
    repair: Repairs;
    sword: Swords;
}

export type RepairPanelProps = StateToProps;

const mapStateToProps = (state: RootState): StateToProps => (
    {
        date: state.browserSetting.date,
        repair: state.responseJson.repair,
        sword: state.responseJson.sword,
    }
);

export default connect<StateToProps>(
    mapStateToProps,
)(RepairPanel);
