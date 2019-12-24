import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { PartyPanelAction, selectCorrect } from '../actions/partyPanel';
import SelectSpeedCorrect from '../components/SelectSpeedCorrect';
import { RootState } from '../states/index';
import { speedCorrect } from '../states/PartyPanelState';

interface StateToProps {
  correct: speedCorrect;
}

interface DispatchToProps {
  selectCorrect: (correct: speedCorrect) => void;
}

export type SelectSpeedCorrectProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps =>
  ({
    correct: state.partyPanel.correct,
  });

const mapDispatchToProps = (dispatch: Dispatch<PartyPanelAction>): DispatchToProps =>
  ({
    selectCorrect: (correct: speedCorrect) => {
      dispatch(selectCorrect(correct));
    },
  });

export default connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(SelectSpeedCorrect);
