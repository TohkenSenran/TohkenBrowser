import * as React from 'react';
import toastedNotes from 'toasted-notes';

import { forgeNo, repairNo, swordName } from '../../constants';
import { ToastNotificationProps } from '../containers/ToastNotification';
import NotificationCard from './NotificationCard';

// 通知の出力
const toastNotify = (text: string, imagePath: string): void => {
  toastedNotes.notify(
    ({ onClose }) => <NotificationCard onClick={onClose} text={text} imagePath={imagePath} />,
    { position: 'bottom-right', duration: 10000 },
  );
};

let firstLoad: boolean = true;
const ToastNotification: React.FC<ToastNotificationProps> = (props) => {
  // 過去の更新時刻との比較
  let oldUpdateTime: number = 0;
  let nowUpdateTime: number = 0;
  let targetTime: number = 0;
  // console.log('update check', firstLoad);

  if (props.enableNotify && (props.responseJson)) {
    if (props.responseJson.oldDate) {
      // console.log('前更新時刻', props.responseJson.oldDate);
      oldUpdateTime = props.responseJson.oldDate;
      // console.log('前更新時刻:', oldUpdateTime);
    }
    if (props.responseJson.newDate) {
      // console.log('現更新時刻', props.responseJson.newDate);
      nowUpdateTime = props.responseJson.newDate;
      // console.log('現更新時刻:', nowUpdateTime);
    }

    if ((oldUpdateTime > 0) && (nowUpdateTime > 0)) {
      if (props.responseJson.forge) {
        for (let i: number = 0; i < forgeNo; i += 1) {
          if (props.responseJson.forge[(i + 1).toString()]) {
            // console.log(`forge[${(i + 1).toString()}]`, props.responseJson.forge[(i + 1).toString()]);
            const targetString =
              props.responseJson.forge[(i + 1).toString()].finished_at;
            targetTime = targetString ? Date.parse(targetString) : 0;
            // console.log('完了時刻:', targetTime);

            if ((firstLoad && (nowUpdateTime > targetTime)) ||
              ((oldUpdateTime < targetTime) && (nowUpdateTime > targetTime))) {
              const swordId = props.responseJson.forge[(i + 1).toString()].sword_id;
              // console.log('swordId', swordId);
              // 鍛刀が完了した刀剣男子のIdが不明な場合の処理
              let notifyText = `${i + 1}番部屋\n鍛刀完了`;
              let notifyImagePath = chrome.extension.getURL('icon/TohkenBrowser-128.png');
              if (swordId) {
                notifyText = `${swordName[swordId.toString()]}\n鍛刀完了`;
                notifyImagePath = chrome.extension.getURL(`img/Setting/Swords/${swordId.toString()}/Normal.png`);
              }
              toastNotify(notifyText, notifyImagePath);
            }
          }
        }
      }
      if (props.responseJson.repair) {
        for (let i: number = 0; i < repairNo; i += 1) {
          if (props.responseJson.repair[(i + 1).toString()]) {
            // console.log(`forge[${(i + 1).toString()}]`, props.responseJson.forge[(i + 1).toString()]);
            const targetString =
              props.responseJson.repair[(i + 1).toString()].finished_at;
            targetTime = targetString ? Date.parse(targetString) : 0;
            // console.log('完了時刻:', targetTime);

            if ((firstLoad && (nowUpdateTime > targetTime)) ||
              ((oldUpdateTime < targetTime) && (nowUpdateTime > targetTime))) {
              const serialId =
                props.responseJson.repair[(i + 1).toString()].sword_serial_id;

              if ((serialId) && (props.responseJson.sword)) {
                const swordId = props.responseJson.sword[serialId].sword_id;
                toastNotify(
                  `${swordName[swordId.toString()]}\n手入完了`,
                  chrome.extension.getURL(`img/Setting/Swords/${swordId.toString()}/Repair.png`),
                );
              }
            }
          }
        }
      }
      // console.log('forge Obj %O', props.responseJson.forge);
      firstLoad = false;
    }
  }

  return (
    <React.Fragment />
  );
};

export default ToastNotification;
