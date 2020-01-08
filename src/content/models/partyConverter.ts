import { partyMemberNo } from '../../constants';
import { Party } from '../states/responseJson/Party';
import { Swords } from '../states/responseJson/Sword';
import { getRemainingTime } from './getRemainingTime';
import { Equips } from '../states/responseJson/Equip';
import { getEquipSwordStatus } from './swordConverter';
import { textType } from '../states/PartyPanelState';

const getState = (status: string | number) => {
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

interface MemberProps {
  lv: string;
  scout: string;
}

const getMemberProps = (party: Party, swords: Swords, equips: Equips): MemberProps => {
  let totalLv: number = 0;
  let totalScout: number = 0;
  let member: number = 0;
  for (let i: number = 0; i < partyMemberNo; i += 1) {
    if (party.slot[i + 1]) {
      const serialId = party.slot[i + 1].serial_id;
      if ((serialId) && (swords[serialId]) && (swords[serialId].level)) {
        totalLv += parseInt(swords[serialId].level.toString(), 10);
        totalScout += getEquipSwordStatus(swords[serialId], textType.scout, false, equips);
        member += 1;
      }
    }
  }
  return {
    lv: `男子Lv\n合計：${totalLv}\n平均：${Math.round(totalLv / member * 10) / 10}`,
    scout: `偵察値\n合計：${totalScout}\n `,
  };

};

export const partyConverter = (party: Party, swords: Swords, equips: Equips, date: number) => {
  const memberProps = getMemberProps(party, swords, equips);
  return ({
    name: party.party_name || '無名部隊',
    state: getState(party.status),
    remainingTime: getRemainingTime(party.finished_at, date),
    memberLv: memberProps.lv,
    memberScout: memberProps.scout,
  });
};
