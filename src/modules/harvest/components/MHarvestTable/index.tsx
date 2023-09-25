import { CancelRounded, CheckCircleRounded } from "@mui/icons-material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import { CActionsTable, CActiveTag, CDataGrid } from "@/others/";

import { IGetHarvestResponse } from "@/types/harvest";
import { IMHarvestTableProps } from "./types";

export const MHarvestTable: React.FC<IMHarvestTableProps> = ({
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
      field: "__index",
      headerName: "#",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "page_name",
      headerName: "mã cơ sở",
      minWidth: 200,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "name",
      headerName: "địa chỉ",
      flex: 1,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "action",
      headerName: "ACTION",
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridRenderCellParams<IGetHarvestResponse>) => (
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