import { Reducer } from 'redux';

import { HomeSwordsTableActions, homeSwordsTableActionType } from '../actions/homeSwordsTable';
import { homeSwordsTableInitialState, HomeSwordsTableState } from '../states/homeSwordsTable';

const homeSwordsTable: Reducer<HomeSwordsTableState, HomeSwordsTableActions> =
  (state = homeSwordsTableInitialState, action) => {
    switch (action.type) {
      case homeSwordsTableActionType.SET_HOMESWORDS:
        return {
          ...state,
          homeSwords: action.homeSwords,
        };
      default:
        return state;
    }
  };

export default homeSwordsTable;
