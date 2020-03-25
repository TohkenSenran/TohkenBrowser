import store from '../store';

import { Duty } from '../states/responseJson/Duty';
import { Equips } from '../states/responseJson/Equip';
import { Forges } from '../states/responseJson/Forge';
import { Parties } from '../states/responseJson/Party';
import { Repairs } from '../states/responseJson/Repair';
import { Swords } from '../states/responseJson/Sword';

import { gameURL } from '../../constants';
import { checkDevConnect } from '../actions/browserSetting';
import { updateJsonState } from '../actions/responseJson';
import { ResponseJsonState } from '../states/ResponseJsonState';
import { analyseDuty } from './analyseDuty';
import { analyseEquip } from './analyseEquip';
import { analyseForge } from './analyseForge';
import { analyseOptions } from './analyseOptions';
import { analyseParty } from './analyseParty';
import { analyseRepair } from './analyseRepair';
import { analyseSword } from './analyseSword';
import { Resource } from '../states/responseJson/Resource';
import { analyseResource } from './analyseResource';
import { analyseHistory } from './analyseHistory';

export const analyseJson = (json: any, oldJson: ResponseJsonState): void => {
  if (json.targetPageUrl) {
    // console.log('connecting? :', json.targetPageUrl);
    // console.log(`devTargetUrl ${(json.targetPageUrl === gameURL)}`);
    store.dispatch(checkDevConnect((json.targetPageUrl === gameURL)));
  }

  if (json) {
    const page: string = json.page ? json.page : 'NotFound';
    console.log('page:', page);

    const sword: Swords = analyseSword(json, json.page, oldJson.sword, oldJson.repair);
    // console.log(`swords ${Object.keys(sword).length}`);
    // store.dispatch(updateJsonSword(sword));
    // console.log('sword dispatched');

    const party: Parties = analyseParty(json, json.page, oldJson.party);
    // console.log(`parties ${Object.keys(party).length}`);
    // store.dispatch(updateJsonParty(party));

    const equip: Equips = analyseEquip(json, json.page, oldJson.equip);
    // console.log(`equips ${Object.keys(equip).length}`);
    // store.dispatch(updateJsonEquip(equip));

    const forge: Forges = analyseForge(json, json.page, oldJson.forge);
    // console.log(`forges ${Object.keys(forge).length}`);
    // store.dispatch(updateJsonForge(forge));

    const repair: Repairs = analyseRepair(json, json.page, oldJson.repair, sword);
    // console.log(`repairs ${Object.keys(repair).length}`);
    // store.dispatch(updateJsonRepair(repair));

    const duty: Duty = analyseDuty(json, json.page, oldJson.duty);
    // console.log(`duty ${Object.keys(duty).length}`);
    // store.dispatch(updateJsonDuty(duty));

    const resource: Resource = analyseResource(json, json.page, oldJson.resource);
    // console.log('resource %o', { resource });

    analyseOptions(json, json.page);

    analyseHistory(json, json.page, sword, party, equip, forge, repair, duty, resource);

    store.dispatch(updateJsonState(
      {
        page,
        sword,
        party,
        equip,
        forge,
        repair,
        duty,
        resource,
        newDate: Date.now(),
        oldDate: oldJson.newDate,
      },
    ));
  }
};
