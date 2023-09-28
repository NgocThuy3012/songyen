import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import { CActionsTable, CDataGrid } from "@/others/";
import { IMSalesTableProps } from "./typess";
import { IGetSalesResponse } from "@/types/sales";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { CQrcode } from "@/controls/";

export const MSalesTable: React.FC<IMSalesTableProps> = ({
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
      headerName: `địa chỉ`,
      minWidth: 200,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "plot",
      headerName: "lô thu hoạch",
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
      field: "importLot",
      headerName: "lô nhập kho",
      minWidth: 200,
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "inputDate",
      headerName: "ngày nhập kho",
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
      renderCell: (params: GridRenderCellParams<IGetSalesResponse>) => (
        <CQrcode id={params.row.id} />
      ),
    },
    {
      field: "action",
      headerName: "",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridRenderCellParams<IGetSalesResponse>) => (
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
