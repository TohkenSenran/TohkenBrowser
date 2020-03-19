import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { PartyPanelActions, setEnableExtendView } from '../actions/partyPanel';
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

const mapDispatchToProps = (dispatch: Dispatch<PartyPanelActions>): DispatchToProps =>
  ({
    onChange: (enableExtendView: boolean) => {
      dispatch(setEnableExtendView(enableExtendView));
    },
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EnableExtendView);
