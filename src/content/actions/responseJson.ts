import { Duty } from '../states/responseJson/Duty';
import { Equips } from '../states/responseJson/Equip';
import { Forges } from '../states/responseJson/Forge';
import { Parties } from '../states/responseJson/Party';
import { Repairs } from '../states/responseJson/Repair';
import { Swords } from '../states/responseJson/Sword';
import { ResponseJsonState } from '../states/ResponseJsonState';

export enum responseJsonActionType {
    UPDATE_JSONSTATE = 'UPDATE_JSONSTATE',
    UPDATE_DATE = 'UPDATE_DATE',
}

export interface UpdateJsonStateAction {
    type: responseJsonActionType.UPDATE_JSONSTATE;
    responseJson: ResponseJsonState;
}

export interface UpdateDateAction {
    type: responseJsonActionType.UPDATE_DATE;
    date: number;
}

// まとめてデータ更新
export const updateJsonState = (
    responseJson: ResponseJsonState,
): UpdateJsonStateAction => (
        {
            type: responseJsonActionType.UPDATE_JSONSTATE,
            responseJson,
        }
    );

// タイマー更新用
export const updateDate = (
    date: number,
): UpdateDateAction => (
        {
            type: responseJsonActionType.UPDATE_DATE,
            date,
        }
    );

export type ResponseJsonAction =
    UpdateJsonStateAction |
    UpdateDateAction;
