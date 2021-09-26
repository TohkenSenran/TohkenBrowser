import { partyNo } from '../../constants';
import { Parties } from '../states/responseJson/Party';

export const analyseParty = (jsonValue: any, page: string, oldParty: Parties): Parties => {
  // console.log(`analyseParty ${page}`);
  let party: Parties = oldParty ? { ...oldParty } : {};
  switch (page) {
    case 'party/change_battle_party':
      // partyプロパティが不適当のため無視
      party = oldParty ?? {};
      break;
    case 'party/setsword':
    case 'party/removesword':
    case 'party/partyreplacement':
      // 部隊の情報がpartyに括られていない
      for (let i = 0; i < partyNo; i += 1) {
        party[i + 1] = jsonValue[i + 1];
      }
      break;
    case 'party/get_sally_party_info':
    case 'party/get_wait_party_info':
      // 部隊の一部情報のみ供給
      party = {};
      for (let i = 0; i < partyNo; i += 1) {
        // console.log('oldParty %O', party[i + 1]);
        party[i + 1] = jsonValue[i + 1] ?? { ...oldParty[i + 1] };
      }
      break;
    default:
      // 上記以外のページでは，partyが存在しない場合oldPartyを返して更新しない
      party = jsonValue.party && jsonValue.party !== '[]' ? jsonValue.party : oldParty;
  }
  // console.log('parties %O', party);
  return party;
};
