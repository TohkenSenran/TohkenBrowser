import * as React from 'react';

// tslint:disable-next-line: import-name
import MaterialTable, { Column, Localization, Options } from 'material-table';

import { Box } from '@material-ui/core';

import { conquestConverter } from '../models/conquestConverter';
import { ConquestList } from '../states/ConquestList';

const ConquestTable: React.FC = () => {
  const header: Column<ConquestList>[] = [
    { title: '遠征先', field: 'destination', cellStyle: { padding: '6px', textAlign: 'center' } },
    { title: '必要Lv', field: 'totalLv', cellStyle: { padding: '6px', textAlign: 'right' } },
    { title: '刀種', field: 'requireSwords', cellStyle: { padding: '6px', textAlign: 'center' } },
    { title: '基礎Exp', field: 'swordExp', cellStyle: { padding: '6px', textAlign: 'right' } },
    { title: '主Exp', field: 'userExp', cellStyle: { padding: '6px', textAlign: 'right' } },
    { title: '木炭', field: 'charcoal', cellStyle: { padding: '6px', textAlign: 'right' } },
    { title: '玉鋼', field: 'steel', cellStyle: { padding: '6px', textAlign: 'right' } },
    { title: '冷却材', field: 'coolant', cellStyle: { padding: '6px', textAlign: 'right' } },
    { title: '砥石', field: 'file', cellStyle: { padding: '6px', textAlign: 'right' } },
    { title: '報酬品', field: 'item', cellStyle: { padding: '6px', textAlign: 'center' } },
    { title: '大成功', field: 'greatAdd', cellStyle: { padding: '6px', textAlign: 'center' } },
  ];

  const localization: Localization = {
    toolbar: {
      searchPlaceholder: '検索',
      searchTooltip: '検索',
    },
  };

  const options: Options = {
    paging: false,
  };

  const data: ConquestList[] = conquestConverter();
  return (
    <Box width="100%">
      <MaterialTable
        options={options}
        columns={header}
        data={data}
        title="遠征情報"
        localization={localization}
      />
    </Box>
  );
};

export default ConquestTable;
