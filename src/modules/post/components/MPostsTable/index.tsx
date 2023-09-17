import { CancelRounded, CheckCircleRounded } from '@mui/icons-material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { CActionsTable, CActiveTag, CDataGrid } from '@/others/';
import { IGetPostsResponse } from '@/types/posts';

import { IMPostsTableProps } from './types';

export const MPostsTable: React.FC<IMPostsTableProps> = ({
  data,
  onEdit,
  onDelete,
  page,
  loading,
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
      field: 'category_name',
      headerName: 'CATEGORY',
      minWidth: 300,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'title',
      headerName: 'TITLE',
      minWidth: 200,
      headerAlign: 'left',
      align: 'left',
      flex: 1,
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
      minWidth: 100,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: GridRenderCellParams<IGetPostsResponse>) => (
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
