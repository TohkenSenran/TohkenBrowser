import { connect } from 'react-redux';

import DutyPanel from '../components/DutyPanel';
import { RootState } from '../states/index';
import { Duty } from '../states/responseJson/Duty';
import { Swords } from '../states/responseJson/Sword';

interface StateToProps {
  date: number;
  duty: Duty;
  sword: Swords;
}

export type DutyPanelProps = StateToProps;

const mapStateToProps = (state: RootState): StateToProps =>
  ({
    date: state.responseJson.newDate,
    duty: state.responseJson.duty,
    sword: state.responseJson.sword,
  });

export default connect(
  mapStateToProps,
)(DutyPanel);
