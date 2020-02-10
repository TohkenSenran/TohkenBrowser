import * as React from 'react';

// tslint:disable-next-line: import-name
import MaterialTable, { Action, Column, Localization, Options } from 'material-table';

import { Box } from '@material-ui/core';

import { swordType } from '../../constants';
import { HomeSwordsTableProps } from '../containers/HomeSwordsTable';
import { homeSwordsConverter } from '../models/homeSwordsConverter';
import { HomeSwordsTableContents } from '../states/HomeSwordsTableContents';
import DrawerMenu from './DrawerMenu';

const HomeSwordsTable: React.FC<HomeSwordsTableProps> = (props) => {
  // console.log('in HomeSwordsTable %o', props.homeSwordTable.seasonRewardItems);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuClick = () => { setMenuOpen(true); };
  const menuClose = () => { setMenuOpen(false); };

  const data: HomeSwordsTableContents[] = homeSwordsConverter(props.homeSwordsTable.homeSwords);
  // console.log('data: %o', data);
  const textCellStyle: React.CSSProperties = { padding: '12px 6px', textAlign: 'center', whiteSpace: 'pre' };
  const numberCellStyle: React.CSSProperties = { padding: 6, textAlign: 'right' };

  const columns: Array<Column<HomeSwordsTableContents>> = [
    { title: 'No', field: 'sword_id', filtering: false, cellStyle: numberCellStyle },
    { title: '刀名', field: 'name', cellStyle: textCellStyle },
    { title: '刀種', field: 'swordType', lookup: swordType, cellStyle: textCellStyle },
    { title: '刀装数', field: 'slotNumber', lookup: { 1: 1, 2: 2, 3: 3 }, cellStyle: { ...numberCellStyle, background: 'lavenderblush' } },
    { title: '英気', field: 'fatigue', filtering: false, cellStyle: numberCellStyle },
    { title: '生存', field: 'hp_max', filtering: false, cellStyle: numberCellStyle },
    { title: '打撃', field: 'atk', filtering: false, cellStyle: numberCellStyle },
    { title: '統率', field: 'def', filtering: false, cellStyle: numberCellStyle },
    { title: '機動', field: 'mobile', filtering: false, cellStyle: numberCellStyle },
    { title: '衝力', field: 'back', filtering: false, cellStyle: numberCellStyle },
    { title: '必殺', field: 'loyalties', filtering: false, cellStyle: numberCellStyle },
    { title: '偵察', field: 'scout', filtering: false, cellStyle: numberCellStyle },
    { title: '隠蔽', field: 'hide', filtering: false, cellStyle: numberCellStyle },
  ];

  const localization: Localization = {
    toolbar: {
      searchPlaceholder: '検索',
      searchTooltip: '検索',
    },
  };

  const options: Options = {
    filtering: true,
    headerStyle: { textAlign: 'center' },
    paging: false,
  };

  const actions: Array<Action<HomeSwordsTableContents>> = [
    {
      icon: 'menu',
      isFreeAction: true,
      onClick: menuClick,
      tooltip: '設定',
    },
  ];

  return (
    <Box width="100%">
      <MaterialTable
        options={options}
        columns={columns}
        data={data}
        title={'遠征情報一覧'}
        localization={localization}
      />
      <DrawerMenu menuOpen={menuOpen} menuClose={menuClose} />
    </Box>
  );
};

export default HomeSwordsTable;
