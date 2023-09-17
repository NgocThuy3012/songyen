import { useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { ICDataGridProps } from './types';

export const CDataGrid = ({
  rows,
  columns,
  loading,
  page = 1,
  pageSize = 10,
  onRowClick,
  ...props
}: ICDataGridProps) => {
  //#region Data
  const _columns = useMemo(() => {
    return columns.map((e) => ({ ...e, sortable: false }));
  }, [columns]);

  const _rows = useMemo(() => {
    return rows.map((e, i) => ({
      ...e,
      __index: (page - 1) * pageSize + (i + 1),
    }));
  }, [rows, page]);
  //#endregion

  //#region Event

  //#endregion

  //#region Render
  return (
    <DataGrid
      autoHeight
      disableColumnMenu
      disableVirtualization
      hideFooter
      rows={_rows}
      columns={_columns}
      loading={loading}
      rowSelection={false}
      // onRowClick={onRowClick}
      localeText={{
        noRowsLabel: 'No data displayed !',
        noResultsOverlayLabel: 'No data displayed !',
      }}
      // getRowHeight={() => 'auto'}
      {...props}
    />
  );
  //#endregion
};
