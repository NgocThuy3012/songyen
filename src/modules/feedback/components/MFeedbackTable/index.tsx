import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { CActionsTable, CActiveTag, CDataGrid } from '@/others/';
import { IGetCustomersResponse } from '@/types/customers';

import { IMFeedbackTableProps } from './types';

export const MFeedbackTable: React.FC<IMFeedbackTableProps> = ({
  data,
  page,
  loading,
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
      headerName: `customeR’s name`,
      minWidth: 200,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'position',
      headerName: 'position',
      minWidth: 330,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'description',
      headerName: 'DESCRIPTION',
      minWidth: 250,
      headerAlign: 'left',
      align: 'left',
      flex: 1,
    },
    {
      field: 'is_public',
      headerName: 'PUBLIC',
      minWidth: 70,
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
      page={page}
      loading={loading}
      onRowClick={({ row }) => onEdit(row.id)}
    />
  );
  //#endregion
};
