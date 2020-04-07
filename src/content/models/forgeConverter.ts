import { forgeColorName } from '../../constants';
import { Forge } from '../states/responseJson/Forge';
import { getRemainingTime } from './getRemainingTime';
import { getSwordName } from './getSwordName';

export const forgeConverter = (
  forge: Forge,
  date: number,
): { swordName: string; remainingTime: string; forgeColor: string } =>
  // console.log(forge.sword_id);
  // console.log(forge.sword_id ? forge.sword_id : '0');
  ({
    swordName: getSwordName(undefined, undefined, forge.sword_id),
    remainingTime: getRemainingTime(forge.finished_at, date),
    forgeColor:
      forge.creating_at && forge.finished_at
        ? forgeColorName[(Date.parse(forge.finished_at) - Date.parse(forge.creating_at)) / 60000]
        : 'lightgray',
  });
