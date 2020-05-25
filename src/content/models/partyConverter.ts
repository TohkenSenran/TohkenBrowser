import { partyMemberNo, statusType } from '../../constants';
import { Equips } from '../states/responseJson/Equip';
import { Party } from '../states/responseJson/Party';
import { Swords } from '../states/responseJson/Sword';
import { getRemainingTime } from './getRemainingTime';
import { getEquipSwordStatus } from './swordConverter';

const getState = (status: string | number): string => {
  switch (status) {
    case '1':
    case 1:
      return '待機中';
    case '2':
    case 2:
      return '遠征中';
    case '3':
    case 3:
      return '出陣中';
    default:
      return '待機中';
  }
};

const getMemberProps = (
  party: Party,
  swords: Swords,
  equips: Equips,
): { fatigue: string; lv: string; scout: string } => {
  let totalFatigue = 0;
  let totalLv = 0;
  let totalScout = 0;
  let member = 0;

  for (let i = 0; i < partyMemberNo; i += 1) {
    if (party.slot[i + 1]) {
      const serialId = party.slot[i + 1].serial_id;
      if (serialId && swords[serialId] && swords[serialId].level) {
        totalFatigue += parseInt(swords[serialId].fatigue.toString(), 10);
        totalLv += parseInt(swords[serialId].level.toString(), 10);
        totalScout += getEquipSwordStatus(swords[serialId], statusType.scout, false, equips);
        member += 1;
      }
    }
  }
  return {
    fatigue: `英気値\n平均：${Math.round((totalFatigue / member) * 10) / 10}\n `,
    lv: `男士Lv\n合計：${totalLv}\n平均：${Math.round((totalLv / member) * 10) / 10}`,
    scout: `偵察値\n合計：${totalScout}\n `,
  };
};

export const partyConverter = (
  party: Party,
  swords: Swords,
  equips: Equips,
  date: number,
): {
  name: string;
  state: string;
  remainingTime: string;
  memberFatigue: string;
  memberLv: string;
  memberScout: string;
} => {
  const memberProps = getMemberProps(party, swords, equips);
  return {
    name: party.party_name || '無名部隊',
    state: getState(party.status),
    remainingTime: getRemainingTime(party.finished_at, date),
    memberFatigue: memberProps.fatigue,
    memberLv: memberProps.lv,
    memberScout: memberProps.scout,
  };
};
