import * as React from 'react';

// tslint:disable-next-line: import-name
import MaterialTable, { Column, Localization, Options } from 'material-table';

import { Box } from '@material-ui/core';

import { HistoryTableProps } from '../containers/HistoryTable';
import {
  HistoryTableContents,
  historyTableContentsInitialState,
} from '../states/HistoryTableContents';

const HistoryTable: React.FC<HistoryTableProps> = (props) => {
  const { historyTable } = props;
  // console.log('in HistoryTable %o', historyTable.history);
  const data: HistoryTableContents[] = historyTable.history;
  // console.log('data: %o', data);
  const textCellStyle: React.CSSProperties = {
    padding: '12px 6px',
    textAlign: 'center',
    whiteSpace: 'pre',
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
      exportName: 'CSV出力',
      exportTitle: '保存',
    },
  };

  const options: Options = {
    header: false,
    sorting: false,
    exportButton: true,
    pageSize: 10,
    pageSizeOptions: [10, 50, 100],
    rowStyle: { borderStyle: 'solid', borderWidth: '1px 1px', borderColor: 'lightgray' },
  };
  /*
  const actions: Array<Action<HistoryTableContents>> = [
    {
      icon: 'menu',
      isFreeAction: true,
      onClick: menuClick,
      tooltip: '設定',
    },
  ];
  */
  return (
    <Box width="100%">
      <MaterialTable
        options={options}
        columns={columns}
        data={data}
        title="活動記録一覧"
        localization={localization}
      />
    </Box>
  );
};

export default HistoryTable;
