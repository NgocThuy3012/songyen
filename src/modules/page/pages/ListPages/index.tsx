import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getPages } from '@/apis/page.api';
import { IGetPageResponse } from '@/types/page';

import { MPageTable } from '../../components/MPageTable';

const ListPages = () => {
  const navigate = useNavigate();

  //#region Data

  const { data, isLoading, isError } = useQuery({
    queryKey: ['page'],
    queryFn: () => getPages(),
  });

  const listData = useMemo<IGetPageResponse[]>(() => {
    return !isError ? data?.data?.data || [] : [];
  }, [data]);

  //#endregion

  //#region Event

  const onEdit = (id: string) => navigate(`detail/${id}`);

  //#endregion

  //#region Render
  return (
    <Box>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems={{ xs: 'start', md: 'center' }}
        justifyContent="space-between"
        flex={1}
        mb={3}
      >
        <Typography variant="page-title">Page</Typography>
      </Stack>

      <Paper variant="wrapper">
        <MPageTable
          loading={isLoading}
          data={listData || []}
          onEdit={onEdit}
          page={1}
        />
      </Paper>
    </Box>
  );
};

export default ListPages;
