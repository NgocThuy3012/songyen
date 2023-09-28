import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import { CActionsTable, CActiveTag, CDataGrid } from "@/others/";

import { IMInfoTableProps } from "./types";
import { IGetInfoResponse } from "@/types/info";
import { CQrcode } from "@/controls/";

export const MInfoTable: React.FC<IMInfoTableProps> = ({
  data,
  loading,
  page,
  onEdit,
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
      headerName: `mã cơ sở`,
      minWidth: 200,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "address",
      headerName: "Địa chỉ",
      minWidth: 500,
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "acreage",
      headerName: "Diện tích chăn nuôi",
      minWidth: 200,
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "qrcode",
      headerName: "xuất QRcode",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridRenderCellParams<IGetInfoResponse>) => (
        <CQrcode id={params.row.id} />
      ),
    },
    {
      field: "action",
      headerName: "",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridRenderCellParams<IGetInfoResponse>) => (
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
      loading={loading}
      page={page}
      onRowClick={({ row }) => onEdit(row.id)}
    />
  );
  //#endregion
};
