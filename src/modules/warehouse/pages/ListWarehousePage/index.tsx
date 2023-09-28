import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AddCircleOutline } from "@mui/icons-material";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";

import { useNavigateQuery, useRevertQuery } from "@/hooks/";

import { MWarehouseTable } from "../../components";
import { IGetWarehouseResponse } from "@/types/warehouse";

const ListWarehousePage = () => {
  //#region Data
  const location = useLocation();
  const navigate = useNavigate();

  const { navigateWithNewQuery } = useNavigateQuery();
  const params = useRevertQuery(location.search);

  const [data, setData] = useState<IGetWarehouseResponse[]>([]);

  const existingDataStr = localStorage.getItem("harvestData");

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
        <Typography variant="page-title">Kho</Typography>
      </Stack>

      <Paper variant="wrapper">
        <MWarehouseTable
          data={data || []}
          onEdit={onEdit}
          // page={paginate.page}
        />
      </Paper>
    </Box>
  );
  //#endregion
};

export default ListWarehousePage;
