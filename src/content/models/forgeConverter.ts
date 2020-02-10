import { forgeColorName, swordProps } from '../../constants';
import { Forge } from '../states/responseJson/Forge';
import { getRemainingTime } from './getRemainingTime';

export const forgeConverter = (forge: Forge, date: number) => {
  // console.log(forge.sword_id);
  // console.log(forge.sword_id ? forge.sword_id : '0');
  // console.log(((forge.creating_at) && (forge.finished_at)) ? (Date.parse(forge.finished_at) - Date.parse(forge.creating_at)) / 60000 : '未取得');
  return ({
    swordName: swordProps[forge.sword_id ? forge.sword_id.toString() : '0'].name,
    remainingTime: getRemainingTime(forge.finished_at, date),
    forgeColor: ((forge.creating_at) && (forge.finished_at)) ?
      forgeColorName[(Date.parse(forge.finished_at) - Date.parse(forge.creating_at)) / 60000] :
      'lightgray',
  });
};
