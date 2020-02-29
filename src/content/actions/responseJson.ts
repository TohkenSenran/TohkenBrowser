import { ResponseJsonState, responseJsonInitialState } from '../states/ResponseJsonState';

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
export const updateJsonState = (responseJson: ResponseJsonState): UpdateJsonStateAction => {
  // 新規追加の設定値をstoreからロードすると，新しい設定値がundefinedになる
  Object.keys(responseJsonInitialState).forEach((key: string) => {
    if (responseJson[key] === undefined) {
      // console.log('undefinedkey', key);
      responseJson[key] = responseJsonInitialState[key];
    }
  });
  return ({
    type: responseJsonActionType.UPDATE_JSONSTATE,
    responseJson,
  });
};

// タイマー更新用
export const updateDate = (
  date: number,
): UpdateDateAction => ({
  type: responseJsonActionType.UPDATE_DATE,
  date,
});

export type ResponseJsonActions =
  UpdateJsonStateAction |
  UpdateDateAction;
