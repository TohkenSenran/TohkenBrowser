import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { checkHorseDisable, PartyPanelAction, selectCorrect } from '../actions/partyPanel';
import SelectSpeedCorrect from '../components/SelectSpeedCorrect';
import { RootState } from '../states/index';
import { speedCorrect } from '../states/PartyPanelState';

interface StateToProps {
  correct: speedCorrect;
  horseDisable: boolean;
}

interface DispatchToProps {
  selectCorrect: (correct: speedCorrect) => void;
  checkHorseDisable: (horseDisable: boolean) => void;
}

export type SelectSpeedCorrectProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps =>
  ({
    correct: state.partyPanel.correct,
    horseDisable: state.partyPanel.horseDisable,
  });

const mapDispatchToProps = (dispatch: Dispatch<PartyPanelAction>): DispatchToProps =>
  ({
    selectCorrect: (correct: speedCorrect) => {
      dispatch(selectCorrect(correct));
    },
    checkHorseDisable: (horseDisable: boolean) => {
      dispatch(checkHorseDisable(horseDisable));
    },
  });

export default connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(SelectSpeedCorrect);
