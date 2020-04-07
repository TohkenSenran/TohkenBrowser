import { Repair } from '../states/responseJson/Repair';
import { getRemainingTime } from './getRemainingTime';

export const repairConverter = (
  repair: Repair,
  date: number,
): { serialId: string | number | null; remainingTime: string } => ({
  serialId: repair.sword_serial_id,
  remainingTime: getRemainingTime(repair.finished_at, date),
});
