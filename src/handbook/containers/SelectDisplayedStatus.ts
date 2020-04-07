import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { HomeSwordsTableActions, selectDisplayedStatus } from '../actions/homeSwordsTable';
import SelectDisplayedStatus from '../components/SelectDisplayedStatus';
import { HandbookState } from '../states/index';

interface StateToProps {
  displayedStatus: boolean[];
}

interface DispatchToProps {
  selectDisplayedStatus: (displayedStatus: boolean[]) => void;
}

export type SelectDisplayedStatusProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: HandbookState): StateToProps => ({
  displayedStatus: state.homeSwordsTable.displayedStatus,
});

const mapDispatchToProps = (dispatch: Dispatch<HomeSwordsTableActions>): DispatchToProps => ({
  selectDisplayedStatus: (displayedStatus: boolean[]): void => {
    dispatch(selectDisplayedStatus(displayedStatus));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectDisplayedStatus);
