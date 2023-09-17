import { Controller } from 'react-hook-form';
import { Grid, Stack } from '@mui/material';

import { CCKEditor, CFormLabel, CImageUpload, CInput } from '@/controls/';
import { ICreateBlogForm } from '@/types/posts';

import { IMContentProps } from './types';

export const MContent: React.FC<IMContentProps> = ({ control }) => {
  return (
    <>
      <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <CFormLabel label="Title" required htmlFor="title" />
        <Controller
          control={control}
          name="title"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="title"
              placeholder="Enter here..."
              multiline
              rows={5}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="column" spacing={1} flex={1}>
        <CFormLabel label="Description" htmlFor="description" required />
        <Controller<ICreateBlogForm>
          control={control}
          name="description"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="description"
              placeholder="Enter here..."
              multiline
              rows={5}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>
      <Stack direction="column" spacing={1} mt={2.5}>
        <CFormLabel label="Content" required htmlFor="content" />
        <Controller<ICreateBlogForm>
          control={control}
          name="content"
          render={({ field, fieldState: { error } }) => (
            <CCKEditor
              {...field}
              id="content"
              placeholder="Enter here..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Grid container spacing={3} my={2.5}>
        <Grid item xs={4}>
          <CFormLabel label="Thumbnail" required />
          <Controller
            control={control}
            name="image"
            render={({ field, fieldState: { error } }) => (
              <CImageUpload
                {...field}
                error={!!error}
                helperText={error?.message}
                aspectRatio="2/1"
              />
            )}
          />
        </Grid>
        <Grid item xs={8}>
          <CFormLabel label="Cover Image" required />
          <Controller
            control={control}
            name="background"
            render={({ field, fieldState: { error } }) => (
              <CImageUpload
                {...field}
                error={!!error}
                helperText={error?.message}
                aspectRatio="4/1"
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};
