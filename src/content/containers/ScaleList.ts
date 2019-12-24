import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { BrowserSettingAction, selectScale } from '../actions/browserSetting';
import ScaleList from '../components/ScaleList';
import { BrowserSettingState } from '../states/BrowserSettingState';
import { RootState } from '../states/index';

type StateToProps = {
  browserSetting: BrowserSettingState;
};

type DispatchToProps = {
  onChange: (scale: number) => void;
};

export type ScaleListProps = StateToProps & DispatchToProps;

const mapStateToProps = (state: RootState): StateToProps =>
  ({
    browserSetting: state.browserSetting,
  });

const mapDispatchToProps = (dispatch: Dispatch<BrowserSettingAction>): DispatchToProps =>
  ({
    onChange: (scale: number) => {
      dispatch(selectScale(scale));
    },
  });

export default connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(ScaleList);
