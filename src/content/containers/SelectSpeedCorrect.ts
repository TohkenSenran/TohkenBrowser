import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { correctType } from '../../constants';
import { checkHorseDisable, PartyPanelActions, selectCorrect } from '../actions/partyPanel';
import SelectSpeedCorrect from '../components/SelectSpeedCorrect';
import { RootState } from '../states/index';

interface StateToProps {
  correct: correctType;
  horseDisable: boolean;
}

interface DispatchToProps {
  selectCorrect: (correct: correctType) => void;
  checkHorseDisable: (horseDisable: boolean) => void;
}

export type SelectSpeedCorrectProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps =>
  ({
    correct: state.partyPanel.correct,
    horseDisable: state.partyPanel.horseDisable,
  });

const mapDispatchToProps = (dispatch: Dispatch<PartyPanelActions>): DispatchToProps =>
  ({
    selectCorrect: (correct: correctType) => {
      dispatch(selectCorrect(correct));
    },
    checkHorseDisable: (horseDisable: boolean) => {
      dispatch(checkHorseDisable(horseDisable));
    },
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectSpeedCorrect);
