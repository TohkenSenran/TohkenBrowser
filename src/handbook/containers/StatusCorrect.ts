import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { correctType } from '../../constants';
import { HomeSwordsTableActions, selectCorrect } from '../actions/homeSwordsTable';
import StatusCorrect from '../components/StatusCorrect';
import { HandBookState } from '../states/index';

interface StateToProps {
  correct: correctType;
}

interface DispatchToProps {
  selectCorrect: (correct: correctType) => void;
}

export type StatusCorrectProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: HandBookState): StateToProps =>
  ({
    correct: state.homeSwordsTable.correct,
  });

const mapDispatchToProps = (dispatch: Dispatch<HomeSwordsTableActions>): DispatchToProps =>
  ({
    selectCorrect: (correct: correctType) => {
      dispatch(selectCorrect(correct));
    },
  });

export default connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(StatusCorrect);
