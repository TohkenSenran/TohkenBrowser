import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { PartyPanelAction, selectText } from '../actions/partyPanel';
import PartyPanel from '../components/PartyPanel';
import { RootState } from '../states/index';
import { PartyPanelState } from '../states/PartyPanelState';
import { Equips } from '../states/responseJson/Equip';
import { Parties } from '../states/responseJson/Party';
import { Swords } from '../states/responseJson/Sword';
import { statusType } from '../../constants';

interface StateToProps {
  partyPanel: PartyPanelState;
  date: number;
  party: Parties;
  sword: Swords;
  equip: Equips;
  page: string;
}

interface DispatchToProps {
  selectText: (statusType: statusType, selectViewStatus: boolean[]) => void;
}

export type PartyPanelProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps =>
  ({
    partyPanel: state.partyPanel,
    date: state.responseJson.newDate,
    party: state.responseJson.party,
    sword: state.responseJson.sword,
    equip: state.responseJson.equip,
    page: state.responseJson.page,
  });

const mapDispatchToProps = (dispatch: Dispatch<PartyPanelAction>): DispatchToProps =>
  ({
    selectText: (selectTextType: statusType, selectViewStatus: boolean[]) => {
      dispatch(selectText(selectTextType, selectViewStatus));
    },
  });

export default connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(PartyPanel);
