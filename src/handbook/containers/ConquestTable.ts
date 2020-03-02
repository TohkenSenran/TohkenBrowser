import { connect } from 'react-redux';

import ConquestTable from '../components/ConquestTable';
import { ConquestTableState } from '../states/conquestTable';
import { HandbookState } from '../states/index';

interface StateToProps {
  conquestTable: ConquestTableState;
}

export type ConquestTableProps = StateToProps;

const mapStateToProps = (state: HandbookState): StateToProps =>
  ({
    conquestTable: state.conquestTable,
  });

export default connect<StateToProps>(
  mapStateToProps,
)(ConquestTable);