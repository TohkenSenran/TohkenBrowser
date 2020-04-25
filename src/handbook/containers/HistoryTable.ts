import { connect } from 'react-redux';

import HistoryTable from '../components/HistoryTable';
import { HandbookState } from '../states';
import { HistoryTableState } from '../states/HistoryTable';

interface StateToProps {
  historyTable: HistoryTableState;
}

export type HistoryTableProps = StateToProps;

const mapStateToProps = (state: HandbookState): StateToProps => ({
  historyTable: state.historyTable,
});

export default connect(mapStateToProps)(HistoryTable);
