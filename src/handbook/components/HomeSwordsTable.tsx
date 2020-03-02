import * as React from 'react';

// tslint:disable-next-line: import-name
import MaterialTable, { Action, Localization, Options } from 'material-table';

import { Box } from '@material-ui/core';

import { HomeSwordsTableProps } from '../containers/HomeSwordsTable';
import { generateColumns } from '../models/generateColumns';
import { homeSwordsConverter } from '../models/homeSwordsConverter';
import { HomeSwordsTableContents } from '../states/HomeSwordsTableContents';
import DrawerMenu from './DrawerMenu';

const HomeSwordsTable: React.FC<HomeSwordsTableProps> = (props) => {
  // console.log('in HomeSwordsTable %o', props.homeSwordTable.seasonRewardItems);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuClick = () => { setMenuOpen(true); };
  const menuClose = () => { setMenuOpen(false); };

  const data: HomeSwordsTableContents[] =
    homeSwordsConverter(props.homeSwordsTable.homeSwords, props.homeSwordsTable.correct);
  // console.log('data: %o', data);

  const columns = generateColumns(
    props.homeSwordsTable.columns,
    props.homeSwordsTable.displayedStatus,
  );

  const handleColumnDrag = (sourceIndex: number, destinationIndex: number): void => {
    const sourceColumn = columns[sourceIndex];
    const destinationColumn = columns[destinationIndex];
    columns[sourceIndex] = destinationColumn;
    columns[destinationIndex] = sourceColumn;
    props.setColumns(columns);
  };

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
    search: false,
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
        actions={actions}
        options={options}
        columns={columns}
        data={data}
        title={'本丸男子一覧'}
        onColumnDragged={handleColumnDrag}
        localization={localization}
      />
      <DrawerMenu menuOpen={menuOpen} menuClose={menuClose} />
    </Box>
  );
};

export default HomeSwordsTable;