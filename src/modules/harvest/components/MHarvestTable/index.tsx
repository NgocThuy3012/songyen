import { CancelRounded, CheckCircleRounded } from "@mui/icons-material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import { CActionsTable, CActiveTag, CDataGrid } from "@/others/";

import { IGetHarvestResponse } from "@/types/harvest";
import { IMHarvestTableProps } from "./types";
import { CQrcode } from "@/controls/";

export const MHarvestTable: React.FC<IMHarvestTableProps> = ({
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
      headerName: "mã cơ sở",
      minWidth: 200,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "address",
      headerName: "địa chỉ",
      flex: 1,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "acreage",
      headerName: "Diện tích",
      flex: 1,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "qrcode",
      headerName: "xuất QRcode",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridRenderCellParams<IGetHarvestResponse>) => (
        <CQrcode id={params.row.id} />
      ),
    },
    {
      field: "action",
      headerName: "",
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridRenderCellParams<IGetHarvestResponse>) => (
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
      loading={loading}
      rows={data}
      page={page}
      onRowClick={({ row }) => onEdit(row.id)}
    />
  );
  //#endregion
};
