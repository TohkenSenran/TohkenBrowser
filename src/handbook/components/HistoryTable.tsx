import React from 'react';
import { useSelector } from 'react-redux';

import MaterialTable, { Action, Column, Localization, Options } from '@material-table/core';
import { ExportCsv } from '@material-table/exporters';
import { Box } from '@material-ui/core';
import { browser } from 'webextension-polyfill-ts';

import { HandbookState } from '../states';
import { HistoryTableState } from '../states/HistoryTable';
import {
  HistoryTableContents,
  historyTableContentsInitialState,
} from '../states/HistoryTableContents';
import { storageInitialState } from '../../background/states/StorageState';

export const HistoryTable: React.FC = () => {
  const historyTable = useSelector<HandbookState, HistoryTableState>((state) => state.historyTable);

  // console.log('in HistoryTable %o', historyTable.history);
  const data: HistoryTableContents[] = historyTable.history;
  // console.log('data: %o', data);
  const textCellStyle: React.CSSProperties = {
    padding: '12px 6px',
    textAlign: 'center',
    whiteSpace: 'pre',
  };
  const deleteClick = async (): Promise<void> => {
    // eslint-disable-next-line no-alert
    if (window.confirm('刀剣専覧の履歴をリセットしますか？\n＊ゲームへの影響はありません。')) {
      const storage = await browser.storage.local.get();
      // console.log('storage %o', Object.keys(storage));
      // 設定関連の情報は保持

      const historyList: string[] = Object.keys(storage).filter(
        (value: string) => !Object.keys(storageInitialState).includes(value),
      );
      // console.log('historyList %o', historyList);
      browser.storage.local.remove(historyList);
    }
  };

  const columns: Array<Column<HistoryTableContents>> = [];
  for (let i = 0; i < Object.keys(historyTableContentsInitialState).length; i += 1) {
    columns.push({
      title: `項目${i + 1}`,
      field: `value${i}`,
      cellStyle: textCellStyle,
    });
  }

  const localization: Localization = {
    toolbar: {
      searchPlaceholder: '検索',
      searchTooltip: '検索',
      exportCSVName: 'CSV出力',
      exportTitle: '保存',
    },
  };

  const date = new Date();
  const dateString =
    date.getFullYear() +
    `0${date.getMonth() + 1}`.slice(-2) +
    `0${date.getDate()}`.slice(-2) +
    `0${date.getHours()}`.slice(-2) +
    `0${date.getMinutes()}`.slice(-2) +
    `0${date.getSeconds()}`.slice(-2);

  const options: Options<HistoryTableContents> = {
    header: false,
    sorting: false,
    exportAllData: true,
    exportMenu: [
      {
        label: 'CSV保存',
        exportFunc: (cols, datas) => ExportCsv(cols, datas, `TohkenRecords-${dateString}`),
      },
    ],
    pageSize: 10,
    pageSizeOptions: [10, 50, 100],
    rowStyle: { borderStyle: 'solid', borderWidth: '1px 1px', borderColor: 'lightgray' },
  };
  const actions: Array<Action<HistoryTableContents>> = [
    {
      icon: 'delete',
      isFreeAction: true,
      onClick: deleteClick,
      tooltip: '履歴削除',
    },
  ];

  return (
    <Box width="100%">
      <MaterialTable
        options={options}
        columns={columns}
        actions={actions}
        data={data}
        title="活動記録一覧"
        localization={localization}
      />
    </Box>
  );
};
