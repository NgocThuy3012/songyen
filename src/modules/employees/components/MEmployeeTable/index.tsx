import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { CActionsTable, CDataGrid } from '@/others/';
import { IGetEmployeesResponse } from '@/types/employees';

import { IMEmployeesTableProps } from './typess';

export const MEmployeesTable: React.FC<IMEmployeesTableProps> = ({
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
      field: 'fullname',
      headerName: `FULL NAME`,
      minWidth: 200,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'username',
      headerName: `USER'S NAME`,
      minWidth: 200,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'email',
      headerName: 'EMAIL',
      minWidth: 500,
      headerAlign: 'left',
      align: 'left',
      flex: 1,
    },
    {
      field: 'action',
      headerName: 'ACTION',
      minWidth: 150,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: GridRenderCellParams<IGetEmployeesResponse>) => (
        <CActionsTable onDelete={() => onDelete(params.row.id)} />
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
