import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CFormLabel, CSwitch } from '@/controls/';
import { ICreateBlogForm } from '@/types/posts';

import { IMSwitchProps } from './types';

export const MSwitch: React.FC<IMSwitchProps> = ({ control }) => {
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
    <Stack direction="column" gap={3} flex={1} maxWidth={250}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <CFormLabel label="Public" />
        <Controller<ICreateBlogForm>
          control={control}
          name="is_public"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <CFormLabel label="Pin to homepage" />
        <Controller<ICreateBlogForm>
          control={control}
          name="pin_homepage"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <CFormLabel label="Pin to about us" />
        <Controller<ICreateBlogForm>
          control={control}
          name="pin_about_us"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack>
    </Stack>
  );
  //#endregion
};
