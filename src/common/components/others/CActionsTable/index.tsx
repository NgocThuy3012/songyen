import { useState } from "react";
import { AddCircle, BorderColor, DeleteForever } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Stack, Tooltip } from "@mui/material";

import apiInstance from "@/axios/index";

import { ICActionsTableProps } from "./types";

const MOCK_LANGUAGES = [
  {
    id: "1",
    code: "1",
    label: "Tiếng Việt",
    abbr: "VN",
    disabled: true,
  },
  {
    id: "2",
    code: "2",
    label: "Tiếng Anh",
    abbr: "EN",
    disabled: false,
  },
  {
    id: "3",
    code: "3",
    label: "Tiếng Đức",
    abbr: "GER",
    disabled: false,
  },
  {
    id: "4",
    code: "4",
    label: "Tiếng Pháp",
    abbr: "FR",
    disabled: false,
  },
];

export const CActionsTable: React.FC<ICActionsTableProps> = ({
  onEdit,
  onDelete,
  onCreate,
  multiLanguages,
}) => {
  //#region Data
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const [selection, setSelection] = useState<string>("");
  //#endregion

  //#region Event
  const onClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    selectType: string
  ) => {
    setAnchorEl(event.currentTarget);
    setSelection(selectType);
  };
  const onClose = () => setAnchorEl(null);

  const onLanguageSelect = (value: string) => {
    apiInstance.defaults.headers["Cookie"] = `language=${value}`;
    // selection === 'edit' ? onEdit() : onDelete();
    setSelection("");
    onClose();
  };
  //#endregion

  //#region Render
  //Đa ngôn ngữ sẽ có sử dụng Dropdown
  if (multiLanguages)
    return (
      <Stack direction="row" spacing={1} justifyContent="center">
        <Tooltip title="Edit">
          <IconButton
            color="warning"
            onClick={(e) => onClick(e, "edit")}
            sx={{ "&:hover": { backgroundColor: "rgb(255 197 12 / 19%)" } }}
          >
            <BorderColor />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            color="secondary"
            onClick={(e) => onClick(e, "delete")}
            disabled
            sx={{ "&:hover": { backgroundColor: "rgb(207 55 61 / 12%)" } }}
          >
            <DeleteForever />
          </IconButton>
        </Tooltip>

        <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
          {MOCK_LANGUAGES.map((e) => (
            <MenuItem
              disabled={e.disabled}
              key={e.id}
              onClick={() => onLanguageSelect(e.code)}
            >
              {e.abbr}
            </MenuItem>
          ))}
        </Menu>
      </Stack>
    );

  return (
    <Stack direction="row" spacing={1} justifyContent="center">
      {onCreate && (
        <Tooltip title="Add">
          <IconButton
            color="primary"
            onClick={onCreate}
            sx={{ "&:hover": { backgroundColor: "rgb(73 127 249 / 19%)" } }}
          >
            <AddCircle />
          </IconButton>
        </Tooltip>
      )}
      {onEdit && (
        <Tooltip title="Edit">
          <IconButton
            color="warning"
            onClick={onEdit}
            sx={{ "&:hover": { backgroundColor: "rgb(255 197 12 / 19%)" } }}
          >
            <BorderColor />
          </IconButton>
        </Tooltip>
      )}
      {onDelete && (
        <Tooltip title="Delete">
          <IconButton
            color="error"
            onClick={onDelete}
            sx={{ "&:hover": { backgroundColor: "rgb(207 55 61 / 12%)" } }}
          >
            <DeleteForever />
          </IconButton>
        </Tooltip>
      )}
    </Stack>
  );
  //#endregion
};
