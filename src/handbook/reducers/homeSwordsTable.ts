import { Reducer } from 'redux';

import { HomeSwordsTableActions, homeSwordsTableActionType } from '../actions/homeSwordsTable';
import { homeSwordsTableInitialState, HomeSwordsTableState } from '../states/HomeSwordsTable';

const homeSwordsTable: Reducer<HomeSwordsTableState, HomeSwordsTableActions> = (
  state = homeSwordsTableInitialState,
  action,
) => {
  switch (action.type) {
    case homeSwordsTableActionType.UPDATE_HOMESWORDSTABLE:
      return action.homeSwordsTable;
    case homeSwordsTableActionType.SET_HOMESWORDS:
      return {
        ...state,
        homeSwords: action.homeSwords,
      };
    case homeSwordsTableActionType.SELECT_CORRECT:
      return {
        ...state,
        correct: action.correct,
      };
    case homeSwordsTableActionType.SELECT_DISPLAYEDSTATUS:
      return {
        ...state,
        displayedStatus: action.displayedStatus,
      };
    case homeSwordsTableActionType.SET_COLUMNS:
      return {
        ...state,
        columns: action.columns,
      };
    default:
      return state;
  }
};

export default homeSwordsTable;
