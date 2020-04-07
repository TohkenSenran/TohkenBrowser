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
  const updateJson = Object.assign(
    responseJson,
    ...(Object.keys(responseJsonInitialState) as (keyof ResponseJsonState)[]).map(
      (key: keyof ResponseJsonState) => ({
        [key]:
          typeof responseJson[key] !== 'undefined'
            ? responseJson[key]
            : responseJsonInitialState[key],
      }),
    ),
  );

  return {
    type: responseJsonActionType.UPDATE_JSONSTATE,
    responseJson: updateJson,
  };
};

// タイマー更新用
export const updateDate = (date: number): UpdateDateAction => ({
  type: responseJsonActionType.UPDATE_DATE,
  date,
});

export type ResponseJsonActions = UpdateJsonStateAction | UpdateDateAction;
