import { Duty, dutyInitialState } from './responseJson/Duty';
import { Equips } from './responseJson/Equip';
import { Forges } from './responseJson/Forge';
import { Parties, partiesInitialState } from './responseJson/Party';
import { Repairs } from './responseJson/Repair';
import { Swords } from './responseJson/Sword';

export interface ResponseJsonState {
    page: string;
    sword: Swords;
    party: Parties;
    equip: Equips;
    forge: Forges;
    repair: Repairs;
    duty: Duty;
    date: number;
}

export const responseJsonInitialState: ResponseJsonState = {
    page: '',
    sword: {},
    party: partiesInitialState,
    equip: {},
    forge: {},
    repair: {},
    duty: dutyInitialState,
    date: Date.now(),
};
