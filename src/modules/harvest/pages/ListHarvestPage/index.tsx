import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Box, Paper, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { useNavigateQuery, useRevertQuery } from "@/hooks/";
import { CPagination } from "@/others/";
import { MHarvestTable } from "../../components/MHarvestTable";

import { listDataHarvest } from "@/mock/harvest";
import { IGetInfoResponse } from "@/types/info";

const ListHarvestPage = () => {
  //#region Data
  const location = useLocation();
  const navigate = useNavigate();

  const [paginate, setPaginate] = useState({ page: 1, pages: 0 });

  const [data, setData] = useState<IGetInfoResponse[]>([]);

  const existingDataStr = localStorage.getItem("infoData");

  useEffect(() => {
    if (existingDataStr) {
      setData(JSON.parse(existingDataStr));
    }
  }, [existingDataStr]);

  //#endregion

  //#region Event

  const onEdit = (id: string) => navigate(`detail/${id}`);

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
        <Typography variant="page-title">Thu hoạch</Typography>
      </Stack>

      <Paper variant="wrapper">
        <MHarvestTable
          // loading={isLoading}
          data={data || []}
          onEdit={onEdit}
          page={paginate.page}
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

export default ListHarvestPage;
