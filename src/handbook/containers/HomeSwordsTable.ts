import { connect } from 'react-redux';

import HomeSwordsTable from '../components/HomeSwordsTable';
import { HomeSwordsTableState } from '../states/homeSwordsTable';
import { HandBookState } from '../states/index';

interface StateToProps {
  homeSwordsTable: HomeSwordsTableState;
}

export type HomeSwordsTableProps = StateToProps;

const mapStateToProps = (state: HandBookState): StateToProps =>
  ({
    homeSwordsTable: state.homeSwordsTable,
  });

export default connect<StateToProps>(
  mapStateToProps,
)(HomeSwordsTable);
