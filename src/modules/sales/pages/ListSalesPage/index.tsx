import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Box, Button, Paper, Stack, Typography } from "@mui/material";

import { useNavigateQuery, useRevertQuery } from "@/hooks/";

import { MSalesTable } from "../../components/MSaleTable";

import { IGetSalesResponse } from "@/types/sales";

const ListSalesPage = () => {
  //#region Data
  const location = useLocation();
  const navigate = useNavigate();

  const { navigateWithNewQuery } = useNavigateQuery();
  const params = useRevertQuery(location.search);

  const [data, setData] = useState<IGetSalesResponse[]>([]);

  const [dataSale, setDataSale] = useState<IGetSalesResponse[]>([]);

  const existingDataStr = localStorage.getItem("warehouseData");

  useEffect(() => {
    if (existingDataStr) {
      setData(JSON.parse(existingDataStr));
    }
  }, [existingDataStr]);

  const existingData = localStorage.getItem("saleData");

  useEffect(() => {
    if (existingData) {
      setDataSale(JSON.parse(existingData));
    }
  }, [existingData]);

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

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems={{ xs: "start", md: "center" }}
        justifyContent="space-between"
        flex={1}
        mb={3}
        sx={{ marginTop: "20px" }}
      >
        <Typography variant="page-title">Danh sách đã xuất bán</Typography>
      </Stack>

      <Paper variant="wrapper">
        <MSalesTable
          data={dataSale || []}
          onEdit={onEdit}
          page={paginate.page}
        />
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
