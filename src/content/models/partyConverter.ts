import { Party } from '../states/responseJson/Party';
import { getRemainingTime } from './getRemainingTime';

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

const getStateStyle = (status: string | number): React.CSSProperties => {
    switch (status) {
        case '1':
        case 1:
            return { marginLeft: 3 };
        case '2':
        case 2:
            return { marginLeft: 3, color: '#9644E3' };
        case '3':
        case 3:
            return { marginLeft: 3, color: '#A24E36' };
        default:
            return { marginLeft: 3 };
    }
};

export const partyConverter = (party: Party, date: number) => ({
    name: party.party_name || '無名部隊',
    state: getState(party.status),
    stateStyle: getStateStyle(party.status),
    remainingTime: getRemainingTime(party.finished_at, date),
});
