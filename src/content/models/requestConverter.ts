import { RequestProps, requestPropsInitialState } from '../states/responseJson/RequestProps';

// requestから情報取得
export const requestConverter = (requestData: any): RequestProps => {
  const requestProps: RequestProps = { ...requestPropsInitialState };
  if (typeof requestData === 'undefined') {
    return requestProps;
  }

  Object.values(requestData).forEach((value: any) => {
    switch (value.name) {
      case 'party_no':
        requestProps.partyNo = value.value;
        break;
      case 'episode_id':
        requestProps.episodeId = value.value;
        break;
      case 'field_id':
      case 'event_field_id':
        requestProps.fieldId = value.value;
        break;
      case 'slot_no':
        requestProps.slotNo = value.value;
        break;
      case 'charcoal':
        requestProps.charcoal = parseInt(value.value, 10);
        break;
      case 'steel':
        requestProps.steel = parseInt(value.value, 10);
        break;
      case 'coolant':
        requestProps.coolant = parseInt(value.value, 10);
        break;
      case 'file':
        requestProps.file = parseInt(value.value, 10);
        break;
      case 'consumable_id':
        requestProps.consumableId = value.value;
        break;
      case 'use_assist':
        requestProps.useAssist = Boolean(parseInt(value.value, 10));
        break;
      case 'serial_id':
        requestProps.serialId = value.value;
        break;
      case 'event_layer_id':
        requestProps.eventLayerId = value.value;
        break;
      default:
        break;
    }
  });
  // partyId: () => { return partyId };
  return requestProps;
};
