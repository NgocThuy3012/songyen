import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { CActionsTable, CActiveTag, CDataGrid } from '@/others/';
import { IGetCustomersResponse } from '@/types/customers';

import { IMCustomersTableProps } from './types';

export const MCustomersTable: React.FC<IMCustomersTableProps> = ({
  data,
  loading,
  page,
  onEdit,
  onDelete,
}) => {
  //#region Ref
  //#endregion

  //#region Data
  const columns: GridColDef[] = [
    {
      field: '__index',
      headerName: '#',
      minWidth: 50,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'name',
      headerName: `CUSTOMER'S NAME`,
      minWidth: 200,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'url',
      headerName: 'URL',
      minWidth: 500,
      headerAlign: 'left',
      align: 'left',
      flex: 1,
    },
    {
      field: 'is_public',
      headerName: 'PUBLIC',
      minWidth: 150,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: GridRenderCellParams<Boolean>) => (
        <CActiveTag value={params.value} />
      ),
    },
    {
      field: 'action',
      headerName: 'ACTION',
      minWidth: 150,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: GridRenderCellParams<IGetCustomersResponse>) => (
        <CActionsTable
          onEdit={() => onEdit(params.row.id)}
          onDelete={() => onDelete(params.row.id)}
        />
      ),
    },
  ];
  //#endregion

  //#region Event
  //#endregion

  //#region Cycle
  //#endregion

  //#region Render
  return (
    <CDataGrid
      columns={columns}
      rows={data}
      loading={loading}
      page={page}
      onRowClick={({ row }) => onEdit(row.id)}
    />
  );
  //#endregion
};
