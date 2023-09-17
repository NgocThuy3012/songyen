import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getDetailPost, updateBlog } from '@/apis/posts.api';
import { CActionsForm } from '@/controls/';
import { IUpdateBlogForm } from '@/types/posts';

import { MPostForm } from '../../components';
import { defaultValuesPost, postResolver } from '../../form';

const UpdatePostPage = () => {
  const navigate = useNavigate();

  //#region Data
  const { id } = useParams();

  const { data, error, isError } = useQuery(
    ['page', id],
    () => getDetailPost(id || ''),
    { enabled: !!id },
  );

  if (error && isError) {
    toast.error((error as any)?.response?.data?.message || 'Something error');
  }

  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<IUpdateBlogForm>({
    mode: 'all',
    resolver: postResolver,
    defaultValues: data?.data?.data || defaultValuesPost,
  });
  //#endregion

  //#region Event
  useEffect(() => {
    if (data?.data?.data) {
      const { category, background_image } = data?.data?.data;

      reset({
        page_id: category?.page?.id,
        category_id: category?.id,
        background: background_image,
        ...data?.data?.data,
      });
    }
  }, [data]);

  const onCancel = () => {
    reset();

    navigate(-1);
  };

  const onSubmit = () => {
    handleSubmit(async (values) => {
      try {
        await updateBlog(id || '', {
          ...values,
          image_id: values.image?.id,
          background_image_id: values.background?.id,
        });

        toast.success('Update success!');

        onCancel();
      } catch (error: any) {
        toast.error(error?.response?.data?.message || 'Update fail!');
      }
    })();
  };
  //#endregion

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">Update</Typography>
      </Box>

      <Paper variant="wrapper">
        <form>
          <MPostForm control={control} />

          <CActionsForm
            onCancel={onCancel}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
          />
        </form>
      </Paper>
    </>
  );
  //#endregion
};

export default UpdatePostPage;
