import * as React from 'react';
import { useSelector } from 'react-redux';
import toastedNotes from 'toasted-notes';

import { RootState } from '../states/index';
import { ResponseJsonState } from '../states/ResponseJsonState';
import { forgeNo, repairNo } from '../../constants';
import { NotificationCard } from './NotificationCard';
import { getSwordName } from '../models/getSwordName';

// 通知の出力
export const toastNotify = (text: string, imagePath: string): void => {
  toastedNotes.notify(
    ({ onClose }) => <NotificationCard onClick={onClose} text={text} imagePath={imagePath} />,
    { position: 'bottom-right', duration: 10000 },
  );
};

let firstLoad = true;
export const ToastNotification: React.FC = () => {
  const enableNotify = useSelector<RootState, boolean>(
    (state) => state.browserSetting.enableNotify,
  );
  const responseJson = useSelector<RootState, ResponseJsonState>((state) => state.responseJson);
  // 過去の更新時刻との比較
  let oldUpdateTime = 0;
  let nowUpdateTime = 0;
  let targetTime = 0;
  // console.log('update check', firstLoad);

  if (enableNotify && responseJson) {
    if (responseJson.oldDate) {
      // console.log('前更新時刻', responseJson.oldDate);
      oldUpdateTime = responseJson.oldDate;
      // console.log('前更新時刻:', oldUpdateTime);
    }
    if (responseJson.newDate) {
      // console.log('現更新時刻', responseJson.newDate);
      nowUpdateTime = responseJson.newDate;
      // console.log('現更新時刻:', nowUpdateTime);
    }

    if (oldUpdateTime > 0 && nowUpdateTime > 0) {
      if (responseJson.forge) {
        for (let i = 0; i < forgeNo; i += 1) {
          if (responseJson.forge[i + 1]) {
            // console.log(`forge[${(i + 1).toString()}]`, responseJson.forge[i + 1]);
            const targetString = responseJson.forge[i + 1].finished_at;
            targetTime = targetString ? Date.parse(targetString) : 0;
            // console.log('完了時刻:', targetTime);

            if (
              (firstLoad && nowUpdateTime > targetTime) ||
              (oldUpdateTime < targetTime && nowUpdateTime > targetTime)
            ) {
              const swordId = responseJson.forge[i + 1].sword_id;
              // console.log('swordId', swordId);
              // 鍛刀が完了した刀剣男士のIdが不明な場合の処理
              let notifyText = `${i + 1}番部屋\n鍛刀完了`;
              let notifyImagePath = chrome.extension.getURL('icon/TohkenBrowser-128.png');
              if (swordId) {
                notifyText = `${getSwordName(undefined, undefined, swordId)}\n鍛刀完了`;
                notifyImagePath = chrome.extension.getURL(
                  `img/Setting/Swords/${swordId.toString()}/Normal.png`,
                );
              }
              toastNotify(notifyText, notifyImagePath);
            }
          }
        }
      }
      if (responseJson.repair) {
        for (let i = 0; i < repairNo; i += 1) {
          if (responseJson.repair[i + 1]) {
            // console.log(`forge[${(i + 1).toString()}]`, responseJson.forge[i + 1]);
            const targetString = responseJson.repair[i + 1].finished_at;
            targetTime = targetString ? Date.parse(targetString) : 0;
            // console.log('完了時刻:', targetTime);

            if (
              (firstLoad && nowUpdateTime > targetTime) ||
              (oldUpdateTime < targetTime && nowUpdateTime > targetTime)
            ) {
              const serialId = responseJson.repair[i + 1].sword_serial_id;

              if (serialId && responseJson.sword) {
                const swordId = responseJson.sword[serialId].sword_id;
                toastNotify(
                  `${getSwordName(undefined, undefined, swordId)}\n手入完了`,
                  chrome.extension.getURL(`img/Setting/Swords/${swordId.toString()}/Repair.png`),
                );
              }
            }
          }
        }
      }
      // console.log('forge Obj %O', responseJson.forge);
      firstLoad = false;
    }
  }
  return <></>;
};
