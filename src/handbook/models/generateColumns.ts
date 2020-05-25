import { Column } from 'material-table';

import { statusType, swordType, statusLabel } from '../../constants';
import { HomeSwordsTableContents } from '../states/HomeSwordsTableContents';
import { homeSwordsTableInitialState } from '../states/HomeSwordsTable';

const textCellStyle: React.CSSProperties = {
  padding: '12px 6px',
  textAlign: 'center',
  whiteSpace: 'pre',
};
const numberCellStyle: React.CSSProperties = { padding: 6, textAlign: 'right' };

const setStatusColumn = (selectType: statusType): Column<HomeSwordsTableContents> => {
  const column: Column<HomeSwordsTableContents> = {
    title: statusLabel[statusType[selectType]],
    field: statusType[selectType],
    filtering: false,
    cellStyle: numberCellStyle,
  };
  switch (selectType) {
    case statusType.fatigue:
      break;
    default:
      break;
  }

  return column;
};

// デザイン要素を1か所に集約するため初期値の設定をここに用意
export const initialColumns = (): Array<Column<HomeSwordsTableContents>> => {
  const swordTypeLabel: { [key: string]: string } = {};
  Object.values(swordType).forEach((value) => {
    swordTypeLabel[value] = value;
  });

  // console.log('sowrdTypeLabel', swordTypeLabel);

  const columns: Array<Column<HomeSwordsTableContents>> = [
    {
      title: 'No',
      field: 'sword_id',
      filtering: false,
      cellStyle: { ...numberCellStyle, background: 'ivory' },
    },
    { title: '刀名', field: 'name', cellStyle: textCellStyle },
    {
      title: '刀種',
      field: 'swordType',
      lookup: swordTypeLabel,
      cellStyle: { ...textCellStyle, background: 'aliceblue' },
    },
    {
      title: '刀装数',
      field: 'slotNumber',
      lookup: { 1: 1, 2: 2, 3: 3 },
      cellStyle: { ...numberCellStyle, background: 'aliceblue' },
    },
    {
      title: '男士Lv',
      field: 'level',
      filtering: false,
      cellStyle: { ...numberCellStyle, background: 'lavenderblush' },
    },
    {
      title: '乱舞Lv',
      field: 'ranbu_level',
      filtering: false,
      cellStyle: { ...numberCellStyle, background: 'lavenderblush' },
    },
    {
      title: '入手日',
      field: 'created_at',
      filtering: false,
      cellStyle: { ...numberCellStyle, background: 'ivory' },
    },
  ];
  Object.values(statusType).forEach((value) => {
    if (typeof value === 'number' && value !== statusType.none && value !== statusType.amulet) {
      // const onChange = () => { handleChange(value, viewStatus[value]); };
      columns.push(setStatusColumn(value));
    }
  });
  return columns;
};

export const generateColumns = (
  columns: Array<Column<HomeSwordsTableContents>> = initialColumns(),
  displayedStatus: boolean[] = homeSwordsTableInitialState.displayedStatus,
): Array<Column<HomeSwordsTableContents>> => {
  // ステータスを有無を反映
  Object.values(statusType).forEach((value) => {
    if (typeof value === 'number' && value !== statusType.none && value !== statusType.amulet) {
      if (displayedStatus[value]) {
        // ステータスを表示する場合
        if (
          columns.every(
            (column: Column<HomeSwordsTableContents>) => statusType[value] !== column.field,
          )
        ) {
          columns.push(setStatusColumn(value));
        }
      } else {
        // ステータスを非表示にする場合
        columns.some((column: Column<HomeSwordsTableContents>, index: number) => {
          if (statusType[value] === column.field) {
            columns.splice(index, 1);
          }
        });
      }
    }
  });

  return columns;
};
