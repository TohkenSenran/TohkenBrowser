import { Duty, dutyInitialState } from '../states/responseJson/Duty';

export const analyseDuty = (jsonValue: any, page: string, oldDuty: Duty): Duty => {
  // console.log(`analyseDuty ${page}`);
  let duty: Duty = oldDuty ? { ...oldDuty } : dutyInitialState;
  switch (page) {
    case 'duty/complete':
      // console.log('duty complete %O', dutyInitialState);
      // 完了情報
      duty = dutyInitialState;
      break;
    default:
      // 上記以外のページでは，dutyの内容が数値でない場合oldDutyを返して更新しない
      if (jsonValue && jsonValue.duty) {
        // console.log('jsonValue: %O', jsonValue);
        // console.log('jsonValueSt:', jsonValue.toString());
        if (jsonValue.duty.toString() === '') {
          // console.log('find empty duty');
          duty = dutyInitialState;
        } else {
          duty = jsonValue.duty;
        }
      } else {
        duty = oldDuty;
      }
      break;
  }
  // console.log('dutys: %O', duty);
  return duty;
};
