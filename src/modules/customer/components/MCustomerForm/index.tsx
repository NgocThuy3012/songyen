import { Controller } from 'react-hook-form';
import { Grid, Stack } from '@mui/material';

import { CFormLabel, CImageUpload, CInput, CSwitch } from '@/controls/';

import { IMCustomerFormProps } from './types';
//stackoverflow.com/questions/63998373/is-there-a-material-ui-based-tree-select-component
//codesandbox.io/s/mui-tree-select-sample-easy-wujtg5?file=/index.js
export const MCustomerForm: React.FC<IMCustomerFormProps> = ({ control }) => {
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
        <Grid item xs={11} rowSpacing={2}>
          <Stack direction="column" spacing={1} mb={2} flex={1}>
            <CFormLabel label="Customer's Name" required />
            <Controller
              control={control}
              name="name"
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

        <Grid item xs={1}>
          <Stack direction="column" spacing={1} mb={2} flex={1}>
            <CFormLabel label="Public" />
            <Controller
              control={control}
              name="is_public"
              render={({ field, fieldState: { error } }) => (
                <CSwitch
                  {...field}
                  id="is_public"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>
        </Grid>
      </Grid>

      <Stack direction="column" spacing={1} mb={2} flex={1}>
        <CFormLabel label="URL" required />
        <Controller
          control={control}
          name="url"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="url"
              placeholder="Enter here..."
              multiline
              rows={1}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="column" spacing={1} mb={2} flex={1}>
        <CFormLabel label="Image" required />
        <Controller
          control={control}
          name="image"
          render={({ field, fieldState: { error } }) => (
            <CImageUpload
              {...field}
              imgWrapClassName="customer-img"
              maxWidth={300}
              aspectRatio="1/1"
              error={!!error}
              helperText={error?.message}
              showMaxSize
              showPlaceHolder
            />
          )}
        />
      </Stack>
    </>
  );
  //#endregion
};