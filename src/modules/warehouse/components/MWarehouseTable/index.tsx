import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import { CActionsTable, CDataGrid } from "@/others/";

import { IGetWarehouseResponse } from "@/types/warehouse";
import { IMWarehouseTableProps } from "./types";
import { CQrcode } from "@/controls/";

export const MWarehouseTable: React.FC<IMWarehouseTableProps> = ({
  data,
  onEdit,
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
      field: "code",
      headerName: "mã cơ sở",
      minWidth: 200,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "address",
      headerName: "địa chỉ",
      minWidth: 300,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "weight",
      headerName: "Trọng lượng",
      minWidth: 200,
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "date",
      headerName: "ngày thu hoạch",
      minWidth: 200,
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "plot",
      headerName: "lô thu hoạch",
      minWidth: 300,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "qrcode",
      headerName: "xuất QRcode",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridRenderCellParams<IGetWarehouseResponse>) => (
        <CQrcode id={params.row.id} />
      ),
    },
    {
      field: "action",
      headerName: "",
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridRenderCellParams<IGetWarehouseResponse>) => (
        <CActionsTable onEdit={() => onEdit(params.row.id)} />
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
