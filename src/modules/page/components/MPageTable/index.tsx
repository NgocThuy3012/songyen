import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { CActionsTable, CDataGrid } from '@/others/';
import { IGetPageResponse } from '@/types/page';

import { IMPageTableProps } from './types';

export const MPageTable: React.FC<IMPageTableProps> = ({
  data,
  page,
  loading,
  onEdit,
}) => {
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
      headerName: 'Page',
      minWidth: 100,
      headerAlign: 'left',
      align: 'left',
      flex: 1,
    },
    {
      field: 'description',
      headerName: 'DESCRIPTION',
      minWidth: 618,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'action',
      headerName: 'ACTION',
      minWidth: 70,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: GridRenderCellParams<IGetPageResponse>) => (
        <CActionsTable onEdit={() => onEdit(params.row.id)} />
      ),
    },
  ];
  //#endregion

  //#region Event
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
