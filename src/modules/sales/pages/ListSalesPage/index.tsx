import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Box, Button, Paper, Stack, Typography } from "@mui/material";

import { useNavigateQuery, useRevertQuery } from "@/hooks/";

import { MSalesTable } from "../../components/MSaleTable";

import { IGetSalesResponse } from "@/types/sales";

// import { MCustomersTable } from '../../components';

const ListSalesPage = () => {
  //#region Data
  const location = useLocation();
  const navigate = useNavigate();

  const { navigateWithNewQuery } = useNavigateQuery();
  const params = useRevertQuery(location.search);

  const [data, setData] = useState<IGetSalesResponse[]>([]);

  const existingDataStr = localStorage.getItem("warehouseData");

  useEffect(() => {
    if (existingDataStr) {
      setData(JSON.parse(existingDataStr));
    }
  }, [existingDataStr]);

  const [paginate, setPaginate] = useState({ page: 1, pages: 0 });

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
        <Typography variant="page-title">Xuất bán</Typography>
      </Stack>

      <Paper variant="wrapper">
        <MSalesTable data={data || []} onEdit={onEdit} page={paginate.page} />
      </Paper>

      {/* <CPagination
        page={paginate.page}
        pages={paginate.pages}
        // onChange={onPageChange}
      /> */}
    </Box>
  );
  //#endregion
};

export default ListSalesPage;
