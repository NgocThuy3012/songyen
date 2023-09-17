import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';

import { createBlog } from '@/apis/posts.api';
import { CActionsForm } from '@/controls/';
import { ICreateBlogForm } from '@/types/posts';

import { MPostForm } from '../../components';
import { defaultValuesPost, postResolver } from '../../form';

const CreatePostPage = () => {
  //#region Data
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ICreateBlogForm>({
    mode: 'all',
    resolver: postResolver,
    defaultValues: defaultValuesPost,
  });

  const navigate = useNavigate();
  //#endregion

  //#region Event
  const onCancel = () => {
    reset();

    navigate(-1);
  };

  const onSubmit = () => {
    handleSubmit(async (values) => {
      try {
        await createBlog({
          ...values,
          image_id: values.image?.id,
          background_image_id: values.background?.id,
        });

        toast.success('Create success!');

        onCancel();
      } catch (error: any) {
        toast.error(error?.response?.data?.message || 'Create fail!');
      }
    })();
  };
  //#endregion

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">Add New</Typography>
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

export default CreatePostPage;
