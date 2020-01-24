import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { addCopyright, BrowserSettingAction } from '../actions/browserSetting';
import AddCopyright from '../components/AddCopyright';
import { RootState } from '../states/index';

interface StateToProps {
  addCopyright: boolean;
}

interface DispatchToProps {
  onChange: (addCopyright: boolean) => void;
}

export type AddCopyrightProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps =>
  ({
    addCopyright: state.browserSetting.addCopyright,
  });

const mapDispatchToProps = (dispatch: Dispatch<BrowserSettingAction>): DispatchToProps =>
  ({
    onChange: (copyright: boolean) => {
      dispatch(addCopyright(copyright));
    },
  });

export default connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(AddCopyright);