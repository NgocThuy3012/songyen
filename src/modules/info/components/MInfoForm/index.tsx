import { Controller } from "react-hook-form";
import { Grid, Stack } from "@mui/material";

import { CFormLabel, CInput } from "@/controls/";

import { IMInfoFormProps } from "./types";
//stackoverflow.com/questions/63998373/is-there-a-material-ui-based-tree-select-component
//codesandbox.io/s/mui-tree-select-sample-easy-wujtg5?file=/index.js
export const MInfoForm: React.FC<IMInfoFormProps> = ({ control }) => {
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
                />
              )}
            />
          </Stack>
        </Grid>
      </Grid>

      <Stack direction="column" spacing={1} mb={2} flex={1}>
        <CFormLabel label="Địa chỉ" required />
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="name"
              placeholder="Địa chỉ..."
              multiline
              rows={1}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>
    </>
  );
  //#endregion
};
