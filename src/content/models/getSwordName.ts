import { Swords } from '../states/responseJson/Sword';
import { swordsProps } from '../../constants';

// シリアルIDと刀種IDが存在しない場合に対応した刀剣男士名取得
export const getSwordName = (
  serialId: string | number | null = '0',
  sword: Swords = {},
  swordId: string | number | null = '0',
): string => {
  const fixedSerialId: string = serialId?.toString() ?? '0';
  const fixedSwordId: string = swordId?.toString() ?? '0';
  if (
    fixedSerialId !== '0' &&
    fixedSerialId in sword &&
    sword[fixedSerialId].sword_id in swordsProps
  ) {
    return swordsProps[sword[fixedSerialId].sword_id].name;
  }
  if (fixedSwordId !== '0' && fixedSwordId in swordsProps) {
    return swordsProps[fixedSwordId].name;
  }
  return swordsProps[0].name;
};
