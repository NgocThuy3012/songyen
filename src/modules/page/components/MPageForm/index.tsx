import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CFormLabel, CImageUpload, CInput, CSwitch } from '@/controls/';
import { IUpdatePageForm } from '@/types/page';

import { IMPageFormProps } from './types';

export const MPageForm: React.FC<IMPageFormProps> = ({ control }) => {
  //#region Data

  //#endregion

  //#region Event

  //#endregion

  //#region Render
  return (
    <>
      <Stack direction="column" spacing={2.5} mb={2.5}>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Page" required />
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState: { error } }) => (
              <CInput
                {...field}
                placeholder="Select page"
                error={!!error}
                helperText={error?.message}
                disabled
              />
            )}
          />
        </Stack>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Description" />
          <Controller
            control={control}
            name="description"
            render={({ field, fieldState: { error } }) => (
              <CInput
                {...field}
                placeholder="Enter here"
                error={!!error}
                helperText={error?.message}
                rows={4}
                multiline
              />
            )}
          />
        </Stack>

        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Cover Image" required />
          <Controller
            control={control}
            name="image"
            render={({ field, fieldState: { error } }) => (
              <CImageUpload
                {...field}
                error={!!error}
                helperText={error?.message}
                aspectRatio="16/9"
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
            <Controller<IUpdatePageForm>
              control={control}
              name="is_public"
              render={({ field }) => <CSwitch {...field} />}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
  //#endregion
};
