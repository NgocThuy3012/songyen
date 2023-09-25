import { useMemo } from "react";
import { Controller } from "react-hook-form";
import { Grid, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { getPageServices } from "@/apis/page-services.api";
import { CAutocomplete, CFormLabel, CInput, CSwitch } from "@/controls/";

import { IOption } from "@/types/options";
import { IMHarvestFormProps } from "./types";
import { ICreateHarvestForm } from "@/types/harvest";

export const MHarvestForm: React.FC<IMHarvestFormProps> = ({ control }) => {
  //#region Ref
  //#endregion

  //#region Data
  const pageQuery = useQuery({
    queryKey: ["page-services"],
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
      <Grid container spacing={1}>
        <Grid item xs={6} rowSpacing={2}>
          <Stack direction="column" spacing={1} mb={2} flex={1}>
            <CFormLabel label="Mã cơ sở" required />
            <Controller
              control={control}
              name="code"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  id="name"
                  placeholder="Enter here..."
                  multiline
                  rows={1}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>
        </Grid>

        <Grid item xs={6} rowSpacing={2}>
          <Stack direction="column" spacing={1} mb={2} flex={1}>
            <CFormLabel label="Diện tích chăn nuôi" required />
            <Controller
              control={control}
              name="acreage"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  id="url"
                  placeholder="Enter here..."
                  multiline
                  rows={1}
                  error={!!error}
                  helperText={error?.message}
                  type="number"
                />
              )}
            />
          </Stack>
        </Grid>
      </Grid>

      <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <CFormLabel label="Địa chỉ" htmlFor="name" required />
        <Controller<ICreateHarvestForm>
          control={control}
          name="address"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="name"
              placeholder="Enter here..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Grid container spacing={1}>
        <Grid item xs={6} rowSpacing={2}>
          <Stack direction="column" spacing={1} mb={2} flex={1}>
            <CFormLabel label="Ngày thu hoạch" required />
            <Controller
              control={control}
              name="date"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  id="name"
                  placeholder="Enter here..."
                  multiline
                  rows={1}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>
        </Grid>

        <Grid item xs={6} rowSpacing={2}>
          <Stack direction="column" spacing={1} mb={2} flex={1}>
            <CFormLabel label="Trọng lượng" required />
            <Controller
              control={control}
              name="weight"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  id="url"
                  placeholder="Enter here..."
                  multiline
                  rows={1}
                  error={!!error}
                  helperText={error?.message}
                  type="number"
                />
              )}
            />
          </Stack>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={6} rowSpacing={2}>
          <Stack direction="column" spacing={1} mb={2} flex={1}>
            <CFormLabel label="Lô thu hoạch" required />
            <Controller
              control={control}
              name="plot"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  id="name"
                  placeholder="Enter here..."
                  multiline
                  rows={1}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
  //#endregion
};