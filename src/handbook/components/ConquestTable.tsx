import React from 'react';
import { useSelector } from 'react-redux';

import MaterialTable, { Column, Localization, Options } from '@material-table/core';
import { Box, useMediaQuery } from '@material-ui/core';

import { ConquestTableState } from '../states/ConquestTable';
import { HandbookState } from '../states/index';
import { conquestConverter } from '../models/conquestConverter';
import { ConquestTableContents } from '../states/ConquestTableContents';

export const ConquestTable: React.FC = () => {
  const conquestTable = useSelector<HandbookState, ConquestTableState>(
    (state) => state.conquestTable,
  );
  const data: ConquestTableContents[] = conquestConverter(conquestTable.seasonRewardItems);
  // console.log('data: %o', data);
  const textCellStyle: React.CSSProperties = {
    padding: '12px 6px',
    textAlign: 'center',
    whiteSpace: 'pre',
  };
  const numberCellStyle: React.CSSProperties = { padding: 6, textAlign: 'right' };

  const prefersDarkMode: boolean = useMediaQuery('(prefers-color-scheme: dark)');

  const columns: Array<Column<ConquestTableContents>> = [
    { title: '遠征先', field: 'destination', cellStyle: textCellStyle },
    {
      title: '必要Lv',
      field: 'totalLv',
      cellStyle: { ...numberCellStyle, background: prefersDarkMode ? '#4b4648' : 'lavenderblush' },
    },
    {
      title: '必要時間',
      field: 'time',
      cellStyle: { ...numberCellStyle, background: prefersDarkMode ? '#4b4648' : 'lavenderblush' },
    },
    { title: '刀種', field: 'requireSwords', cellStyle: textCellStyle },
    {
      title: '基礎Exp',
      field: 'swordExp',
      cellStyle: { ...numberCellStyle, background: prefersDarkMode ? '#46484b' : 'aliceblue' },
    },
    {
      title: '木炭',
      field: 'charcoal',
      cellStyle: { ...textCellStyle, background: prefersDarkMode ? '#4b4b46' : 'ivory' },
    },
    {
      title: '玉鋼',
      field: 'steel',
      cellStyle: { ...textCellStyle, background: prefersDarkMode ? '#4b4b46' : 'ivory' },
    },
    {
      title: '冷却材',
      field: 'coolant',
      cellStyle: { ...textCellStyle, background: prefersDarkMode ? '#4b4b46' : 'ivory' },
    },
    {
      title: '砥石',
      field: 'file',
      cellStyle: { ...textCellStyle, background: prefersDarkMode ? '#4b4b46' : 'ivory' },
    },
    { title: '季節報酬', field: 'seasonReward', cellStyle: { ...textCellStyle, color: 'crimson' } },
    { title: '大成功', field: 'greatAdd', cellStyle: textCellStyle },
  ];

  const localization: Localization = {
    toolbar: {
      searchPlaceholder: '検索',
      searchTooltip: '検索',
    },
  };

  const options: Options<ConquestTableContents> = {
    headerStyle: { textAlign: 'center' },
    paging: false,
    sorting: false,
  };

  return (
    <Box width="100%">
      <MaterialTable
        options={options}
        columns={columns}
        data={data}
        title="遠征情報一覧"
        localization={localization}
      />
    </Box>
  );
};
