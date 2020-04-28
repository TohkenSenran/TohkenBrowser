import { Reducer } from 'redux';

import { HistoryTableActions, historyTableActionType } from '../actions/historyTable';
import { historyTableInitialState, HistoryTableState } from '../states/HistoryTable';
import { sortHistory } from '../models/getAllHistory';

const historyTable: Reducer<HistoryTableState, HistoryTableActions> = (
  state = historyTableInitialState,
  action,
) => {
  const { history } = { ...state };
  switch (action.type) {
    case historyTableActionType.UPDATE_HISTORYTABLE:
      return {
        ...state,
        history: action.history,
      };
    case historyTableActionType.PUSH_HISTORY:
      history.push(action.singleHistory);
      // console.log('singleHistory ', history);
      return {
        ...state,
        history: sortHistory(history),
      };
    case historyTableActionType.REMOVE_HISTORY:
      if (action.headValue) {
        return {
          ...state,
          history: history.filter((value) => value.value0 !== action.headValue),
        };
      }
      return state;
    default:
      return state;
  }
};

export default historyTable;
