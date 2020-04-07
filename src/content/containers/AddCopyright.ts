import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { addCopyright, BrowserSettingActions } from '../actions/browserSetting';
import AddCopyright from '../components/AddCopyright';
import { RootState } from '../states/index';

interface StateToProps {
  addCopyright: boolean;
}

interface DispatchToProps {
  onChange: (addCopyright: boolean) => void;
}

export type AddCopyrightProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps => ({
  addCopyright: state.browserSetting.addCopyright,
});

const mapDispatchToProps = (dispatch: Dispatch<BrowserSettingActions>): DispatchToProps => ({
  onChange: (copyright: boolean): void => {
    dispatch(addCopyright(copyright));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCopyright);
