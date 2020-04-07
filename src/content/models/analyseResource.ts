import { Resource, resourceInitialState } from '../states/responseJson/Resource';

export const analyseResource = (jsonValue: any, page: string, oldResource: Resource): Resource => {
  // console.log(`analyseResource ${page}`);
  let resource: Resource = oldResource ? { ...oldResource } : resourceInitialState;
  switch (page) {
    case 'xxxxxx':
      // 特別な処理が必要な場合
      resource = resourceInitialState;
      break;
    default:
      // 上記以外のページでは，resourceの内容が数値でない場合oldResourceを返して更新しない
      if (jsonValue && jsonValue.resource) {
        // console.log('jsonValue: %O', jsonValue);
        // console.log('jsonValueSt:', jsonValue.toString());
        if (jsonValue.resource.toString() === '') {
          // console.log('find empty resource');
          resource = resourceInitialState;
        } else {
          resource = jsonValue.resource;
        }
      } else {
        resource = oldResource;
      }
      break;
  }
  // console.log('resources: %O', resource);
  return resource;
};
