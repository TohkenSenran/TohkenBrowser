import * as React from 'react';

// tslint:disable-next-line: import-name
import MaterialTable, { Action, Column, Localization, Options } from 'material-table';

import { Box } from '@material-ui/core';

import { conquestConverter } from '../models/conquestConverter';
import { ConquestList } from '../states/ConquestList';
import DrawerMenu from './DrawerMenu';

const ConquestTable: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuClick = () => { setMenuOpen(true); };
  const menuClose = () => { setMenuOpen(false); };

  const data: ConquestList[] = conquestConverter();

  const textCellStyle: React.CSSProperties = { padding: '12px 6px', textAlign: 'center', whiteSpace: 'pre' };
  const numberCellStyle: React.CSSProperties = { padding: 6, textAlign: 'right' };

  const columns: Array<Column<ConquestList>> = [
    { title: '遠征先', field: 'destination', cellStyle: textCellStyle },
    { title: '必要Lv', field: 'totalLv', cellStyle: { ...numberCellStyle, background: 'lavenderblush' } },
    { title: '必要時間', field: 'time', cellStyle: { ...numberCellStyle, background: 'lavenderblush' } },
    { title: '刀種', field: 'requireSwords', cellStyle: textCellStyle },
    { title: '基礎Exp', field: 'swordExp', cellStyle: { ...numberCellStyle, background: 'aliceblue' } },
    { title: '木炭', field: 'charcoal', cellStyle: { ...textCellStyle, background: 'ivory' } },
    { title: '玉鋼', field: 'steel', cellStyle: { ...textCellStyle, background: 'ivory' } },
    { title: '冷却材', field: 'coolant', cellStyle: { ...textCellStyle, background: 'ivory' } },
    { title: '砥石', field: 'file', cellStyle: { ...textCellStyle, background: 'ivory' } },
    { title: '報酬品', field: 'item', cellStyle: textCellStyle },
    { title: '大成功', field: 'greatAdd', cellStyle: textCellStyle },
  ];

  const localization: Localization = {
    toolbar: {
      searchPlaceholder: '検索',
      searchTooltip: '検索',
    },
  };

  const options: Options = {
    paging: false,
    sorting: false,
  };

  const actions: Array<Action<ConquestList>> = [
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

export default ConquestTable;
