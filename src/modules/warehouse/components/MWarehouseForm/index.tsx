import { Controller } from "react-hook-form";
import { Grid, Stack } from "@mui/material";

import { CDatePicker, CFormLabel, CInput } from "@/controls/";

import { IMWarehouseFormProps } from "./types";

//stackoverflow.com/questions/63998373/is-there-a-material-ui-based-tree-select-component
//codesandbox.io/s/mui-tree-select-sample-easy-wujtg5?file=/index.js
export const MWarehouseForm: React.FC<IMWarehouseFormProps> = ({
  control,
  onChangeDate,
}) => {
  //#region Ref

  //#endregion

  //#region Data

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
                <CDatePicker
                  {...field}
                  onChange={(value) => {
                    field.onChange(value);
                    onChangeDate("inputDate", value);
                  }}
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
              name="inputWeight"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  id="url"
                  placeholder="Trọng lượng nhập kho..."
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
                  type="number"
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
