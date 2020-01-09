import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { PartyPanelAction, setSelectViewStatus } from '../actions/partyPanel';
import SelectViewStatus from '../components/SelectViewStatus';
import { RootState } from '../states/index';

interface StateToProps {
  selectViewStatus: boolean[],
}

interface DispatchToProps {
  setSelectViewStatus: (selectViewStatus: boolean[]) => void;
}

export type SelectViewStatusProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps =>
  ({ selectViewStatus: state.partyPanel.selectViewStatus });

const mapDispatchToProps = (dispatch: Dispatch<PartyPanelAction>): DispatchToProps =>
  ({
    setSelectViewStatus: (selectViewStatus: boolean[]) => {
      dispatch(setSelectViewStatus(selectViewStatus));
    },
  });

export default connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(SelectViewStatus);
