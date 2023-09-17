import { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getPageServices } from '@/apis/page-services.api';
import { CAutocomplete, CFormLabel, CInput, CSwitch } from '@/controls/';
import { ICreateCategoryForm } from '@/types/categories';
import { IOption } from '@/types/options';

import { IMCategoryFormProps } from './types';

export const MCategoryForm: React.FC<IMCategoryFormProps> = ({ control }) => {
  //#region Ref
  //#endregion

  //#region Data
  const pageQuery = useQuery({
    queryKey: ['page-services'],
    queryFn: () => getPageServices(),
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

  //#endregion

  //#region Event

  //#endregion

  //#region Func

  //#endregion

  //#region Render
  return (
    <>
      <Stack direction="row" alignItems="center" gap={4} mb={3}>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Page" required />
          <Controller<ICreateCategoryForm>
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
      </Stack>

      <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <CFormLabel label="Category’s Name" htmlFor="name" required />
        <Controller<ICreateCategoryForm>
          control={control}
          name="name"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="name"
              placeholder="Enter here..."
              multiline
              rows={5}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="column" gap={3} flex={1} maxWidth={250}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <CFormLabel label="Public" />
          <Controller<ICreateCategoryForm>
            control={control}
            name="is_public"
            render={({ field }) => <CSwitch {...field} />}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <CFormLabel label="Pin to homepage" />
          <Controller<ICreateCategoryForm>
            control={control}
            name="pin_homepage"
            render={({ field }) => <CSwitch {...field} />}
          />
        </Stack>
      </Stack>
    </>
  );
  //#endregion
};
