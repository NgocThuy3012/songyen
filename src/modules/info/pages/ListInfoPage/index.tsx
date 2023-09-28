import { useLocation, useNavigate } from "react-router-dom";

import { AddCircleOutline } from "@mui/icons-material";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";

import { useNavigateQuery } from "@/hooks/";
import { CPagination } from "@/others/index";
import { MInfoTable } from "../../components";
import { information } from "@/mock/info";
import { useEffect, useState } from "react";
import { IGetInfoResponse } from "@/types/info";

const ListInfoPage = () => {
  //#region Data
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState<IGetInfoResponse[]>([]);

  //#endregion

  //#region Event

  const onEdit = (id: string) => navigate(`detail/${id}`);

  const existingDataStr = localStorage.getItem("infoData");

  useEffect(() => {
    if (existingDataStr) {
      setData(JSON.parse(existingDataStr));
    }
  }, [existingDataStr]);

  //#endregion

  //#region Render
  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems={{ xs: "start", md: "center" }}
        justifyContent="space-between"
        flex={1}
        mb={3}
      >
        <Typography variant="page-title">Thông tin nhà yến</Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          {/* <CSearchInput defaultValue={filter.input.q} onChange={onSearch} /> */}
          <Button
            variant="contained"
            className="add-button"
            startIcon={<AddCircleOutline />}
            onClick={() => navigate("detail")}
          >
            Thêm
          </Button>
        </Stack>
      </Stack>

      <Paper variant="wrapper">
        <MInfoTable
          data={data || []}
          onEdit={onEdit}
          // page={paginate.page}
          // loading={isLoading}
        />
      </Paper>

      {/* <CPagination
        page={paginate.page}
        pages={paginate.pages}
        onChange={onPageChange}
      /> */}
    </Box>
  );
  //#endregion
};

export default ListInfoPage;
