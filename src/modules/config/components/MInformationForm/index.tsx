import { Controller } from 'react-hook-form';
import { Stack, Typography } from '@mui/material';

import { CFormLabel, CInput } from '@/controls/';

import { IMInformationFormProps } from './types';
//stackoverflow.com/questions/63998373/is-there-a-material-ui-based-tree-select-component
//codesandbox.io/s/mui-tree-select-sample-easy-wujtg5?file=/index.js
export const MInformationForm: React.FC<IMInformationFormProps> = ({
  control,
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
      <Stack direction="column" spacing={1} mb={2} flex={1}>
        <Typography variant="form-section-title">
          Contact Information
        </Typography>
        <CFormLabel label="Phone 1" required />
        <Controller
          control={control}
          name="phone1"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="phone1"
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
        <CFormLabel label="Phone 2" />
        <Controller
          control={control}
          name="phone2"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="phone2"
              placeholder="Enter here..."
              multiline
              rows={1}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="column" spacing={1} mb={2} mt={5} flex={1}>
        <CFormLabel label="Email 1" required />
        <Controller
          control={control}
          name="email1"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="email1"
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
        <CFormLabel label="Email 2" />
        <Controller
          control={control}
          name="email2"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="email2"
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
        <CFormLabel label="Location" />
        <Controller
          control={control}
          name="location"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="location"
              placeholder="Enter here..."
              multiline
              rows={1}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="column" spacing={1} mt={5} mb={2} flex={1}>
        <Typography variant="form-section-title">Social Page</Typography>
        <CFormLabel label="Facebook" />
        <Controller
          control={control}
          name="facebook"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="facebook"
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
        <CFormLabel label="Twitter" />
        <Controller
          control={control}
          name="twitter"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="twitter"
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
        <CFormLabel label="Linkedln" />
        <Controller
          control={control}
          name="linkedin"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="linkedin"
              placeholder="Enter here..."
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
