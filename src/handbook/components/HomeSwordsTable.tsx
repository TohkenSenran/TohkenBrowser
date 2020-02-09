import * as React from 'react';

// tslint:disable-next-line: import-name
import MaterialTable, { Action, Column, Localization, Options } from 'material-table';

import { Box } from '@material-ui/core';

import { Sword } from '../../content/states/responseJson/Sword';
import { HomeSwordsTableProps } from '../containers/HomeSwordsTable';
import { homeSwordsConverter } from '../models/homeSwordsConverter';
import DrawerMenu from './DrawerMenu';
import { HomeSwordsTableContents } from '../states/HomeSwordsTableContents';

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
    { title: '刀剣名', field: 'name', cellStyle: textCellStyle },
    { title: '刀装数', field: 'slotNumber', cellStyle: { ...numberCellStyle, background: 'lavenderblush' } },
  ];

  const localization: Localization = {
    toolbar: {
      searchPlaceholder: '検索',
      searchTooltip: '検索',
    },
  };

  const options: Options = {
    headerStyle: { textAlign: 'center' },
    paging: false,
    sorting: false,

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
