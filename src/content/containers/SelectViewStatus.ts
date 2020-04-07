import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { PartyPanelActions, setSelectViewStatus } from '../actions/partyPanel';
import SelectViewStatus from '../components/SelectViewStatus';
import { RootState } from '../states/index';

interface StateToProps {
  displayedStatus: boolean[];
}

interface DispatchToProps {
  setSelectViewStatus: (displayedStatus: boolean[]) => void;
}

export type SelectViewStatusProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps => ({
  displayedStatus: state.partyPanel.displayedStatus,
});

const mapDispatchToProps = (dispatch: Dispatch<PartyPanelActions>): DispatchToProps => ({
  setSelectViewStatus: (displayedStatus: boolean[]): void => {
    dispatch(setSelectViewStatus(displayedStatus));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectViewStatus);
