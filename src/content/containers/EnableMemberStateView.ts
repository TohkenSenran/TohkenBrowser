import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { PartyPanelAction, setEnableExtendView } from '../actions/partyPanel';
import EnableExtendView from '../components/EnableExtendView';
import { RootState } from '../states/index';

type StateToProps = {
  enableExtendView: boolean;
};

type DispatchToProps = {
  onChange: (enableExtendView: boolean) => void;
};

export type EnableMemberStateExtendView = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps =>
  ({
    enableExtendView: state.partyPanel.enableExtendView,
  });

const mapDispatchToProps = (dispatch: Dispatch<PartyPanelAction>): DispatchToProps =>
  ({
    onChange: (enableExtendView: boolean) => {
      dispatch(setEnableExtendView(enableExtendView));
    },
  });

export default connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(EnableExtendView);
