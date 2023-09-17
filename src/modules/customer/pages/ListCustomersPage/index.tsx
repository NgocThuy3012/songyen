import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { deleteCustomer, getCustomers } from '@/apis/customers.api';
import { confirm } from '@/confirm/';
import { CSearchInput } from '@/controls/';
import { useNavigateQuery, useRevertQuery } from '@/hooks/';
import { CPagination } from '@/others/index';
import { IGetCustomersResponse } from '@/types/customers';

import { MCustomersTable } from '../../components';

const ListCustomersPage = () => {
  //#region Data
  const location = useLocation();
  const navigate = useNavigate();

  const { navigateWithNewQuery } = useNavigateQuery();
  const params = useRevertQuery(location.search);

  const [filter, setFilter] = useState(
    params || {
      page: 1,
      pages: 0,
      input: {
        q: '',
      },
    },
  );

  const [paginate, setPaginate] = useState({ page: 1, pages: 0 });

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ['customers', filter],
    queryFn: () => getCustomers(filter),
  });

  const listData = useMemo<IGetCustomersResponse[]>(
    () => (!isError ? data?.data?.data?.data || [] : []),
    [data],
  );
  //#endregion

  //#region Event
  const onPageChange = (event: any, newPage: number) =>
    setFilter((prev) => ({ ...prev, page: newPage }));

  const onEdit = (id: string) => navigate(`detail/${id}`);

  const onDelete = async (id: string) => {
    if (
      await confirm({
        confirmation: 'Deletion cannot be undone!',
        acceptBtnText: 'Confirm',
      })
    ) {
      try {
        await deleteCustomer(id);

        refetch();

        toast.success('Delete success!');
      } catch (error: any) {
        toast.error(error?.response?.data?.message || 'Delete fail!');
      }
    }
  };

  const onSearch = (value: string) =>
    setFilter((prev) => ({ ...prev, page: 1, input: { q: value } }));

  //#endregion

  useEffect(() => {
    setPaginate({
      page: data?.data?.data?.page || 1,
      pages: data?.data?.data?.pages || 0,
    });
  }, [data]);

  useEffect(() => {
    navigateWithNewQuery(filter);
  }, [filter]);

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
        <Typography variant="page-title">Customer</Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <CSearchInput defaultValue={filter.input.q} onChange={onSearch} />
          <Button
            variant="contained"
            className="add-button"
            startIcon={<AddCircleOutline />}
            onClick={() => navigate('detail')}
          >
            ADD NEW
          </Button>
        </Stack>
      </Stack>

      <Paper variant="wrapper">
        <MCustomersTable
          data={listData || []}
          onEdit={onEdit}
          onDelete={onDelete}
          page={paginate.page}
          loading={isLoading}
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

export default ListCustomersPage;
