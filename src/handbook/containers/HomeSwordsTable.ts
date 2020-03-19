import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Column } from 'material-table';

import { HomeSwordsTableActions, setColumns } from '../actions/homeSwordsTable';
import HomeSwordsTable from '../components/HomeSwordsTable';
import { HomeSwordsTableState } from '../states/HomeSwordsTable';
import { HomeSwordsTableContents } from '../states/HomeSwordsTableContents';
import { HandbookState } from '../states/index';

interface StateToProps {
  homeSwordsTable: HomeSwordsTableState;
}

interface DispatchToProps {
  setColumns: (columns: Array<Column<HomeSwordsTableContents>>) => void;
}

export type HomeSwordsTableProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: HandbookState): StateToProps =>
  ({
    homeSwordsTable: state.homeSwordsTable,
  });

const mapDispatchToProps = (dispatch: Dispatch<HomeSwordsTableActions>): DispatchToProps =>
  ({
    setColumns: (columns: Array<Column<HomeSwordsTableContents>>) => {
      dispatch(setColumns(columns));
    },
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeSwordsTable);
