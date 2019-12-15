import { Reducer } from 'redux';

import { ResponseJsonAction, responseJsonActionType } from '../actions/responseJson';
import { responseJsonInitialState, ResponseJsonState } from '../states/ResponseJsonState';

const responseJson: Reducer<ResponseJsonState, ResponseJsonAction> =
    (state = responseJsonInitialState, action) => {
        // console.log('in responseJson reducer');
        // console.log(state);
        // console.log(action);
        switch (action.type) {
            case responseJsonActionType.UPDATE_JSONSTATE:
                // console.log('in loadState of responseJson');
                return {
                    ...state,
                    sword: action.sword,
                    party: action.party,
                    equip: action.equip,
                    forge: action.forge,
                    repair: action.repair,
                    duty: action.duty,
                    newDate: action.newDate,
                    oldDate: action.oldDate,
                };
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
