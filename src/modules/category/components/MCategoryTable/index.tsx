import { CancelRounded, CheckCircleRounded } from '@mui/icons-material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { CActionsTable, CActiveTag, CDataGrid } from '@/others/';
import { IGetCategoryResponse } from '@/types/categories';

import { IMCategoryTableProps } from './types';

export const MCategoryTable: React.FC<IMCategoryTableProps> = ({
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
      field: 'page_name',
      headerName: 'PAGE',
      minWidth: 200,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'name',
      headerName: 'CATEGORY’s name',
      flex: 1,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'pin_homepage',
      headerName: 'PIN HOMEPAGE',
      minWidth: 180,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: GridRenderCellParams<Boolean>) =>
        params.value ? (
          <CheckCircleRounded />
        ) : (
          <CancelRounded sx={{ color: '#3A3A3A' }} />
        ),
    },
    {
      field: 'is_public',
      headerName: 'PUBLIC',
      minWidth: 50,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: GridRenderCellParams<Boolean>) => (
        <CActiveTag value={params.value} />
      ),
    },
    {
      field: 'action',
      headerName: 'ACTION',
      minWidth: 100,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: GridRenderCellParams<IGetCategoryResponse>) => (
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
      loading={loading}
      rows={data}
      page={page}
      onRowClick={({ row }) => onEdit(row.id)}
    />
  );
  //#endregion
};
