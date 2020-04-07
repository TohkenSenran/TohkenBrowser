import { requestType } from './requestType';

export type Request = {
  type: requestType;
  payload: any;
};
