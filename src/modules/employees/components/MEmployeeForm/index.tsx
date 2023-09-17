import { Controller } from 'react-hook-form';
import { Grid, Stack } from '@mui/material';

import { CFormLabel, CInput, CInputPassword } from '@/controls/';

import { IMEmployeeFormProps } from './types';

//stackoverflow.com/questions/63998373/is-there-a-material-ui-based-tree-select-component
//codesandbox.io/s/mui-tree-select-sample-easy-wujtg5?file=/index.js
export const MEmployeeForm: React.FC<IMEmployeeFormProps> = ({
  control,
  create,
}) => {
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
            <CFormLabel label="Full Name" required />
            <Controller
              control={control}
              name="fullname"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  id="fullname"
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
            <CFormLabel label="User's Name" required />
            <Controller
              control={control}
              name="username"
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

      <Stack direction="column" spacing={1} mb={2} flex={1}>
        <CFormLabel label="EMAIL" />
        <Controller
          control={control}
          name="email"
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

      {create && (
        <Stack direction="column" spacing={1} mb={2} flex={1}>
          <CFormLabel label="Password" required />
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState: { error } }) => (
              <CInputPassword
                placeholder="Enter password"
                {...field}
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>
      )}
    </>
  );
  //#endregion
};
