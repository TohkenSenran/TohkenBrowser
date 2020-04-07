import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { checkHorseDisable, PartyPanelActions } from '../actions/partyPanel';
import CheckHorseDisable from '../components/CheckHorseDisable';
import { RootState } from '../states/index';

interface StateToProps {
  horseDisable: boolean;
}

interface DispatchToProps {
  checkHorseDisable: (horseDisable: boolean) => void;
}

export type CheckHorseDisableProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps => ({
  horseDisable: state.partyPanel.horseDisable,
});

const mapDispatchToProps = (dispatch: Dispatch<PartyPanelActions>): DispatchToProps => ({
  checkHorseDisable: (horseDisable: boolean): void => {
    dispatch(checkHorseDisable(horseDisable));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckHorseDisable);
