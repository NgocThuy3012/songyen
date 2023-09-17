import { useState } from "react";
import { Button, Tooltip } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import { CDataGrid } from "@/others/";
import { IGetContactsResponse } from "@/types/contacts";

import { MContactModal } from "../MContactModal";

import { defaultContact, IMContactsTableProps } from "./types";

export const MContactsTable: React.FC<IMContactsTableProps> = ({
  data,
  page,
  loading,
}) => {
  //#region State
  const [currentContact, setCurrentContact] =
    useState<IGetContactsResponse>(defaultContact);
  //#endregion

  //#region Ref
  //#endregion

  //#region Func
  const onView = (data: IGetContactsResponse) => {
    setCurrentContact(data);
  };

  const onClose = () => setCurrentContact(defaultContact);
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
      field: "blog_names",
      headerName: "SERVICE",
      minWidth: 300,
      headerAlign: "left",
      align: "left",
      renderCell: (params) => {
        return (
          <p
            style={{
              color: "#191919",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {params.value.join(", ")}
          </p>
        );
      },
    },
    {
      field: "fullname",
      headerName: "NAME",
      minWidth: 200,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "EMAIL",
      minWidth: 200,
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "PHONE",
      minWidth: 200,
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "message",
      headerName: "MESSAGE",
      minWidth: 200,
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "action",
      headerName: "ACTION",
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridRenderCellParams<IGetContactsResponse>) => (
        <Tooltip title="View">
          <Button
            sx={{ backgroundColor: "#1da996", color: "white" }}
            onClick={() => onView(params.row)}
            size="small"
          >
            VIEW
          </Button>
        </Tooltip>
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
    <>
      <CDataGrid columns={columns} rows={data} page={page} loading={loading} />
      {currentContact?.id !== "0" && (
        <MContactModal reset={onClose} {...currentContact} />
      )}
    </>
  );
  //#endregion
};
