import { RequestProps, requestPropsInitialState } from '../states/responseJson/RequestProps';

// requestから情報取得
export const requestConverter = (requestData: any): RequestProps => {
  const requestProps: RequestProps = { ...requestPropsInitialState };
  if (typeof requestData === 'undefined') {
    return requestProps;
  }

  Object.values(requestData).forEach((value: any) => {
    if (value.name === 'party_no') {
      requestProps.partyId = value.value;
    }
    if (value.name === 'episode_id') {
      requestProps.episodeId = value.value;
    }
    if (value.name === 'field_id' || value.name === 'event_field_id') {
      requestProps.fieldId = value.value;
    }
    if (value.name === 'slot_no') {
      requestProps.slotId = value.value;
    }
    if (value.name === 'charcoal') {
      requestProps.charcoal = parseInt(value.value, 10);
    }
    if (value.name === 'steel') {
      requestProps.steel = parseInt(value.value, 10);
    }
    if (value.name === 'coolant') {
      requestProps.coolant = parseInt(value.value, 10);
    }
    if (value.name === 'file') {
      requestProps.file = parseInt(value.value, 10);
    }
    if (value.name === 'consumable_id') {
      requestProps.consumableId = value.value;
    }
    if (value.name === 'use_assist') {
      requestProps.useAssist = Boolean(parseInt(value.value, 10));
    }
    if (value.name === 'serial_id') {
      requestProps.serialId = value.value;
    }
  });
  // partyId: () => { return partyId };
  return requestProps;
};
