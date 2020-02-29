import { Reducer } from 'redux';

import { ResponseJsonActions, responseJsonActionType } from '../actions/responseJson';
import { responseJsonInitialState, ResponseJsonState } from '../states/ResponseJsonState';

const responseJson: Reducer<ResponseJsonState, ResponseJsonActions> =
  (state = responseJsonInitialState, action) => {
    // console.log('in responseJson reducer');
    // console.log(state);
    // console.log(action);
    switch (action.type) {
      case responseJsonActionType.UPDATE_JSONSTATE:
        // console.log('in loadState of responseJson');
        return action.responseJson;
      case responseJsonActionType.UPDATE_DATE:
        // console.log('in responseJson UPDATE_DATE');
        return {
          ...state,
          newDate: action.date,
          oldDate: state.newDate,
        };
      default:
        // console.log('in responseJson reducer');
        return state;
    }
  };

export default responseJson;
