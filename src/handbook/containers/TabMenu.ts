import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import TabMenu from '../components/TabMenu';
import { HandbookState } from '../states';
import { TabMenuState } from '../states/TabMenu';
import { tabType } from '../../constants';
import { TabMenuActions, setTabMenuType } from '../actions/tabMenu';

interface StateToProps {
  tabMenu: TabMenuState;
}
interface DispatchToProps {
  setTabMenu: (targetTabType: tabType) => void;
}

export type TabMenuProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: HandbookState): StateToProps => ({
  tabMenu: state.tabMenu,
});

const mapDispatchToProps = (dispatch: Dispatch<TabMenuActions>): DispatchToProps => ({
  setTabMenu: (targetTabType: tabType): void => {
    dispatch(setTabMenuType(targetTabType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TabMenu);
