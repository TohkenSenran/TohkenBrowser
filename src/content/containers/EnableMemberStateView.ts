import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { PartyPanelAction, setEnableMemberStateView } from '../actions/partyPanel';
import EnableMemberStateView from '../components/EnableMemberStateView';
import { RootState } from '../states/index';

type StateToProps = {
  enableMemberStateView: boolean;
};

type DispatchToProps = {
  onChange: (enableMemberStateView: boolean) => void;
};

export type EnableMemberStateViewProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps =>
  ({
    enableMemberStateView: state.partyPanel.enableMemberStateView,
  });

const mapDispatchToProps = (dispatch: Dispatch<PartyPanelAction>): DispatchToProps =>
  ({
    onChange: (enableMemberStateView: boolean) => {
      dispatch(setEnableMemberStateView(enableMemberStateView));
    },
  });

export default connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(EnableMemberStateView);
