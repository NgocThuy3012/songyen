import { useEffect, useMemo } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import { Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getCategories } from '@/apis/categories.api';
import { getPageServices } from '@/apis/page-services.api';
import { CAutocomplete, CFormLabel } from '@/controls/';
import { IOption } from '@/types/options';
import { ICreateBlogForm } from '@/types/posts';

import { MContent } from './MContent';
import { MSwitch } from './MSwitch';
import { IMPostFormProps } from './types';
//stackoverflow.com/questions/63998373/is-there-a-material-ui-based-tree-select-component
//codesandbox.io/s/mui-tree-select-sample-easy-wujtg5?file=/index.js
export const MPostForm: React.FC<IMPostFormProps> = ({ control }) => {
  //#region Ref
  const pageValue = useWatch({ control, name: 'page_id' });
  //#endregion

  //#region Data
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
          page_id: pageValue,
        },
      }),
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
    if (categoryQuery.data) {
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
  //#endregion

  //#region Event
  useEffect(() => {
    categoryQuery.refetch();
  }, [pageValue]);

  //#endregion

  //#region Func

  //#endregion

  //#region Render
  return (
    <>
      <Stack direction="row" alignItems="center" gap={4} mb={3}>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Page" required />
          <Controller<ICreateBlogForm>
            control={control}
            name="page_id"
            render={({ field, fieldState: { error } }) => (
              <CAutocomplete
                {...field}
                placeholder="Select page"
                options={pageOptions}
                renderOption={(props, option) => (
                  <div key={option.id} {...props}>
                    {option.label}
                  </div>
                )}
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>

        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Category" required />
          <Controller<ICreateBlogForm>
            control={control}
            name="category_id"
            render={({ field, fieldState: { error } }) => (
              <CAutocomplete
                {...field}
                placeholder="Select category"
                options={categoryOptions}
                renderOption={(props, option) => (
                  <div key={option.id} {...props}>
                    {option.label}
                  </div>
                )}
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>
      </Stack>

      <MContent control={control} />

      <MSwitch control={control} />
    </>
  );
  //#endregion
};
