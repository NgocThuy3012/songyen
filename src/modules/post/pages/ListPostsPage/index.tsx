import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getCategories } from '@/apis/categories.api';
import { getPageServices } from '@/apis/page-services.api';
import { deleteBlog, getPosts } from '@/apis/posts.api';
import { confirm } from '@/confirm/';
import { CAutocomplete, CFormLabel, CSearchInput } from '@/controls/';
import { useNavigateQuery, useRevertQuery } from '@/hooks/';
import { CPagination } from '@/others/';
import { IOption } from '@/types/options';
import { IGetPostsResponse } from '@/types/posts';

import { MPostsTable } from '../../components';
import { MOCK_DATA } from '../../mocks/pages';

const ListPostsPage = () => {
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
        q: '',
        page_id: '',
        folder_id: '',
      },
    },
  );

  const pageQuery = useQuery({
    queryKey: ['page-services'],
    queryFn: () => getPageServices(),
  });

  const categoryQuery = useQuery({
    queryKey: ['categories'],
    queryFn: () =>
      getCategories({
        pages: 0,
        page: 1,
        size: 9999,
        input: {
          page_id: filter?.input?.page_id,
        },
      }),
  });

  const [paginate, setPaginate] = useState({ page: 1, pages: 0 });

  const { data, refetch, isFetching } = useQuery({
    queryKey: ['posts', filter],
    queryFn: () => getPosts(filter),
  });

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

  const categoryOptions: IOption[] = useMemo(() => {
    if (categoryQuery) {
      const { data } = categoryQuery;

      if (data?.data?.data?.data) {
        return data.data.data.data.map((category) => ({
          id: category.id,
          label: category.name,
          value: category.id,
        }));
      }
    }

    return [];
  }, [categoryQuery.data]);

  const listData = useMemo<IGetPostsResponse[]>(
    () => data?.data?.data?.data || [],
    [data],
  );
  //#endregion

  //#region Event
  useEffect(() => {
    categoryQuery.refetch();
  }, [filter?.input?.page_id]);

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

  const onDelete = async (id: string) => {
    if (
      await confirm({
        confirmation: 'Deletion cannot be undone!',
        acceptBtnText: 'Confirm',
      })
    ) {
      try {
        await deleteBlog(id);

        refetch();

        toast.success('Delete success!');
      } catch (error: any) {
        toast.error(error?.response?.data?.message || 'Delete fail!');
      }
    }
  };

  const onSearch = (value: string) =>
    setFilter((prev) => ({
      ...prev,
      page: 1,
      input: {
        ...prev.input,
        q: value,
      },
    }));

  const onFilterPage = (value: string) =>
    setFilter((prev) => ({
      ...prev,
      page: 1,
      input: {
        ...prev.input,
        page_id: value,
        category_id: '',
      },
    }));

  const onFilterCategory = (value: string) =>
    setFilter((prev) => ({
      ...prev,
      page: 1,
      input: { ...prev.input, category_id: value },
    }));
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
        <Typography variant="page-title">Post</Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <CSearchInput defaultValue={filter?.input?.q} onChange={onSearch} />
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

      <Stack direction="row" spacing={3} mb={2}>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Page" />
          <CAutocomplete
            value={filter.input?.page_id}
            onChange={onFilterPage}
            placeholder="Select page"
            options={pageOptions}
            disableClearable={false}
            renderOption={(props, option) => (
              <div key={option.id} {...props}>
                {option.label}
              </div>
            )}
          />
        </Stack>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Category" />
          <CAutocomplete
            value={filter.input?.category_id}
            onChange={onFilterCategory}
            placeholder="Select category"
            options={categoryOptions}
            disableClearable={false}
            renderOption={(props, option) => (
              <div key={option.id} {...props}>
                {option.label}
              </div>
            )}
          />
        </Stack>
      </Stack>

      <Paper variant="wrapper">
        <MPostsTable
          data={listData || MOCK_DATA || []}
          onEdit={onEdit}
          onDelete={onDelete}
          page={paginate.page}
          loading={isFetching}
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

export default ListPostsPage;
