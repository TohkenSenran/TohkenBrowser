import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { Box, useMediaQuery } from '@material-ui/core';

import MaterialTable, { Action, Localization, Options } from '@material-table/core';

import { HomeSwordsTableActions, setColumnsOrder } from '../actions/homeSwordsTable';
import { HomeSwordsTableState, initialColumnsOrder } from '../states/HomeSwordsTable';
import { HomeSwordsTableContents } from '../states/HomeSwordsTableContents';
import { HandbookState } from '../states/index';

import { generateColumns } from '../models/generateColumns';
import { homeSwordsConverter } from '../models/homeSwordsConverter';

import { DrawerMenu } from './DrawerMenu';

export const HomeSwordsTable: React.FC = () => {
  const dispatch = useDispatch<Dispatch<HomeSwordsTableActions>>();
  const homeSwordsTable = useSelector<HandbookState, HomeSwordsTableState>(
    (state) => state.homeSwordsTable,
  );

  // console.log('in HomeSwordsTable %o', props.homeSwordTable.seasonRewardItems);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuClick = (): void => {
    setMenuOpen(true);
  };
  const menuClose = (): void => {
    setMenuOpen(false);
  };

  const data: HomeSwordsTableContents[] = homeSwordsConverter(
    homeSwordsTable.homeSwords,
    homeSwordsTable.correct,
  );

  const prefersDarkMode: boolean = useMediaQuery('(prefers-color-scheme: dark)');

  // console.log('data: %o', data);

  const columns = generateColumns(
    homeSwordsTable.columnsOrder,
    homeSwordsTable.displayedStatus,
    prefersDarkMode,
  );

  const handleColumnDrag = (sourceIndex: number, destinationIndex: number): void => {
    const sourceColumn = columns[sourceIndex];
    const destinationColumn = columns[destinationIndex];
    columns[sourceIndex] = destinationColumn;
    columns[destinationIndex] = sourceColumn;

    dispatch(
      setColumnsOrder(
        initialColumnsOrder.sort((a, b) => {
          let aIndex = columns.map((x) => x.field).indexOf(a);
          let bIndex = columns.map((x) => x.field).indexOf(b);
          aIndex = aIndex !== -1 ? aIndex : initialColumnsOrder.length;
          bIndex = bIndex !== -1 ? bIndex : initialColumnsOrder.length;
          return aIndex - bIndex;
        }),
      ),
    );
  };

  const localization: Localization = {
    toolbar: {
      searchPlaceholder: '検索',
      searchTooltip: '検索',
    },
  };

  const options: Options<HomeSwordsTableContents> = {
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
        title="本丸男士一覧"
        onColumnDragged={handleColumnDrag}
        localization={localization}
      />
      <DrawerMenu menuOpen={menuOpen} menuClose={menuClose} />
    </Box>
  );
};
