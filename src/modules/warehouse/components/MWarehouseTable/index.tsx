import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import { CActionsTable, CDataGrid } from "@/others/";

import { IGetWarehouseResponse } from "@/types/warehouse";
import { IMWarehouseTableProps } from "./types";

export const MWarehouseTable: React.FC<IMWarehouseTableProps> = ({
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
      field: "category_name",
      headerName: "địa chỉ",
      minWidth: 300,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "title",
      headerName: "Trọng lượng",
      minWidth: 200,
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "category_name",
      headerName: "lô thu hoạch",
      minWidth: 300,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "action",
      headerName: "ACTION",
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridRenderCellParams<IGetWarehouseResponse>) => (
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
