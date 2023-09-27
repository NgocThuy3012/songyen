import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AddCircleOutline } from "@mui/icons-material";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { getPageServices } from "@/apis/page-services.api";
import { getPosts } from "@/apis/posts.api";

import { useNavigateQuery, useRevertQuery } from "@/hooks/";
import { CPagination } from "@/others/";
import { IOption } from "@/types/options";

import { MOCK_DATA } from "../../mocks/pages";
import { MWarehouseTable } from "../../components";
import { IGetWarehouseResponse } from "@/types/warehouse";
import { listDataWarehouse } from "@/mock/warehouse";

const ListWarehousePage = () => {
  //#region Data
  const location = useLocation();
  const navigate = useNavigate();

  const { navigateWithNewQuery } = useNavigateQuery();
  const params = useRevertQuery(location.search);

  const [filter, setFilter] = useState(
    params || {
      page: 1,
      pages: 0,
      size: 10,
      input: {
        q: "",
        page_id: "",
        folder_id: "",
      },
    }
  );

  const pageQuery = useQuery({
    queryKey: ["page-services"],
    queryFn: () => getPageServices(),
  });

  const [paginate, setPaginate] = useState({ page: 1, pages: 0 });

  const pageOptions: IOption[] = useMemo(() => {
    if (pageQuery) {
      const { data } = pageQuery;

      if (data?.data?.data) {
        return data.data.data.map((page) => ({
          id: page.id,
          label: page.name,
          value: page.id,
        }));
      }
    }

    return [];
  }, [pageQuery.data]);

  //#endregion

  //#region Event

  const onPageChange = (event: any, newPage: number) => {
    setFilter((prev) => ({
      ...prev,
      page: newPage,
      input: {
        ...prev.input,
      },
    }));
  };

  const onEdit = (id: string) => navigate(`detail/${id}`);

  //#endregion

  useEffect(() => {
    navigateWithNewQuery(filter);
  }, [filter]);

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
          data={listDataWarehouse || []}
          onEdit={onEdit}
          page={paginate.page}
        />
      </Paper>

      <CPagination
        page={paginate.page}
        pages={paginate.pages}
        onChange={onPageChange}
      />
    </Box>
  );
  //#endregion
};

export default ListWarehousePage;
