import { connect } from 'react-redux';

import ForgePanel from '../components/ForgePanel';
import { RootState } from '../states/index';
import { Forges } from '../states/responseJson/Forge';
import { Swords } from '../states/responseJson/Sword';

interface StateToProps {
    date: number;
    forge: Forges;
    sword: Swords;
}

export type ForgePanelProps = StateToProps;

const mapStateToProps = (state: RootState): StateToProps => (
    {
        date: state.browserSetting.date,
        forge: state.responseJson.forge,
        sword: state.responseJson.sword,
    }
);

export default connect<StateToProps>(
    mapStateToProps,
)(ForgePanel);
