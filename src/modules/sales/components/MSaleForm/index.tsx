import { Controller } from "react-hook-form";
import { Grid, Stack } from "@mui/material";

import { CDatePicker, CFormLabel, CInput } from "@/controls/";
import { IMSaleFormProps } from "./types";

import { useState } from "react";

//stackoverflow.com/questions/63998373/is-there-a-material-ui-based-tree-select-component
//codesandbox.io/s/mui-tree-select-sample-easy-wujtg5?file=/index.js
export const MSaleForm: React.FC<IMSaleFormProps> = ({ control }) => {
  //#region Ref

  //#endregion

  //#region Data
  //#endregion

  //#region Event
  //#endregion

  //#region Cycle
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
                  placeholder="Mã cơ sở..."
                  multiline
                  rows={1}
                  error={!!error}
                  helperText={error?.message}
                  disabled
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
                  placeholder="Diện tích chăn nuôi..."
                  multiline
                  rows={1}
                  error={!!error}
                  helperText={error?.message}
                  type="number"
                  disabled
                />
              )}
            />
          </Stack>
        </Grid>
      </Grid>

      <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <CFormLabel label="Địa chỉ" htmlFor="name" required />
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="name"
              placeholder="Địa chỉ..."
              error={!!error}
              helperText={error?.message}
              disabled
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
                // <CInput
                //   {...field}
                //   id="name"
                //   placeholder="Ngày thu hoạch..."
                //   multiline
                //   rows={1}
                //   error={!!error}
                //   helperText={error?.message}
                //   disabled
                // />
                <CDatePicker
                  {...field}
                  onChange={(value) => field.onChange(value)}
                  disabled
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
                  placeholder="Trọng lượng..."
                  multiline
                  rows={1}
                  error={!!error}
                  helperText={error?.message}
                  type="number"
                  disabled
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
                  placeholder="Lô thu hoạch..."
                  multiline
                  rows={1}
                  error={!!error}
                  helperText={error?.message}
                  disabled
                />
              )}
            />
          </Stack>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={6} rowSpacing={2}>
          <Stack direction="column" spacing={1} mb={2} flex={1}>
            <CFormLabel label="Ngày nhập kho" required />
            <Controller
              control={control}
              name="inputDate"
              render={({ field, fieldState: { error } }) => (
                // <CInput
                //   {...field}
                //   id="name"
                //   placeholder="Ngày nhập kho..."
                //   multiline
                //   rows={1}
                //   error={!!error}
                //   helperText={error?.message}
                //   disabled
                // />
                <CDatePicker
                  {...field}
                  onChange={(value) => field.onChange(value)}
                  disabled
                />
              )}
            />
          </Stack>
        </Grid>

        <Grid item xs={6} rowSpacing={2}>
          <Stack direction="column" spacing={1} mb={2} flex={1}>
            <CFormLabel label="Trọng lượng nhập kho" required />
            <Controller
              control={control}
              name="acreage"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  id="url"
                  placeholder="Trọng lượng..."
                  multiline
                  rows={1}
                  error={!!error}
                  helperText={error?.message}
                  disabled
                />
              )}
            />
          </Stack>
        </Grid>
      </Grid>

      <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <CFormLabel label="Lô nhập" htmlFor="name" required />
        <Controller
          control={control}
          name="importLot"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="name"
              placeholder="Lô nhập..."
              error={!!error}
              helperText={error?.message}
              disabled
            />
          )}
        />
      </Stack>

      <Grid container spacing={1}>
        <Grid item xs={6} rowSpacing={2}>
          <Stack direction="column" spacing={1} mb={2} flex={1}>
            <CFormLabel label="Người nhập kho" required />
            <Controller
              control={control}
              name="warehousingPerson"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  id="name"
                  placeholder="Người nhập kho..."
                  multiline
                  rows={1}
                  error={!!error}
                  helperText={error?.message}
                  disabled
                />
              )}
            />
          </Stack>
        </Grid>

        <Grid item xs={6} rowSpacing={2}>
          <Stack direction="column" spacing={1} mb={2} flex={1}>
            <CFormLabel label="Độ ẩm" required />
            <Controller
              control={control}
              name="humidity"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  id="url"
                  placeholder="Độ ẩm..."
                  multiline
                  rows={1}
                  error={!!error}
                  helperText={error?.message}
                  disabled
                />
              )}
            />
          </Stack>
        </Grid>
      </Grid>

      {/* =============== */}
      <Grid container spacing={1}>
        <Grid item xs={6} rowSpacing={2}>
          <Stack direction="column" spacing={1} mb={2} flex={1}>
            <CFormLabel label="Ngày bán" required />
            <Controller
              control={control}
              name="dateSale"
              render={({ field, fieldState: { error } }) => (
                // <CInput
                //   {...field}
                //   id="name"
                //   placeholder="Ngày bán..."
                //   multiline
                //   rows={1}
                //   error={!!error}
                //   helperText={error?.message}
                // />
                <CDatePicker
                  {...field}
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />

            {/* <CDate /> */}
          </Stack>
        </Grid>

        <Grid item xs={6} rowSpacing={2}>
          <Stack direction="column" spacing={1} mb={2} flex={1}>
            <CFormLabel label="Lô bán" required />
            <Controller
              control={control}
              name="saleLot"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  id="url"
                  placeholder="Lô bán..."
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

      <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <CFormLabel label="Trọng lượng bán ra" htmlFor="name" required />
        <Controller
          control={control}
          name="saleWeight"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="name"
              placeholder="Trọng lượng bán ra..."
              error={!!error}
              helperText={error?.message}
              type="number"
            />
          )}
        />
      </Stack>

      <Grid container spacing={1}>
        <Grid item xs={6} rowSpacing={2}>
          <Stack direction="column" spacing={1} mb={2} flex={1}>
            <CFormLabel label="Đơn vị mua" required />
            <Controller
              control={control}
              name="unit"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  id="name"
                  placeholder="Đơn vị mua..."
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
            <CFormLabel label="Người xuất bán" required />
            <Controller
              control={control}
              name="salePerson"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  id="url"
                  placeholder="Người xuất bán..."
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

      <Grid container spacing={1}>
        <Grid item xs={6} rowSpacing={2}>
          <Stack direction="column" spacing={1} mb={2} flex={1}>
            <CFormLabel label="Độ ẩm xuất bán" required />
            <Controller
              control={control}
              name="saleHumidity"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  id="name"
                  placeholder="Độ ẩm xuất bán..."
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
