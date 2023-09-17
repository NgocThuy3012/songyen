import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getContacts, getExport } from '@/apis/contacts.api';
import { CSearchInput } from '@/controls/';
import { useNavigateQuery, useRevertQuery } from '@/hooks/';
import { CPagination } from '@/others/';
import { IGetContactsResponse } from '@/types/contacts';

import { MContactsTable } from '../../components';

const ListContactsPage = () => {
  //#region Data
  const location = useLocation();

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

  const { data, isLoading, isError } = useQuery({
    queryKey: ['contacts', filter],
    queryFn: () => getContacts(filter),
  });

  const listData = useMemo<IGetContactsResponse[]>(
    () => (!isError ? data?.data?.data?.data || [] : []),
    [data],
  );
  //#endregion

  //#region Event
  const onPageChange = (event: any, newPage: number) =>
    setFilter((prev) => ({ ...prev, page: newPage }));

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

  const onExport = async () => {
    const res = await getExport(filter);

    const url = window.URL.createObjectURL(new Blob([res]));

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.xlsx');
    document.body.appendChild(link);
    link.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };

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
        <Typography variant="page-title">Contact form</Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <CSearchInput defaultValue={filter.input.q} onChange={onSearch} />
          <Button
            variant="contained"
            className="add-button"
            onClick={() => onExport()}
          >
            EXPORT
          </Button>
        </Stack>
      </Stack>

      <Paper variant="wrapper">
        <MContactsTable
          data={listData || []}
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

export default ListContactsPage;
