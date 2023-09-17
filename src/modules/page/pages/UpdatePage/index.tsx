import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getPageById, updatePage } from '@/apis/page.api';
import { CActionsForm } from '@/controls/';
import { IUpdatePageForm } from '@/types/page';

import { MPageForm } from '../../components/MPageForm';
import { defaultValuesPage, pageResolver } from '../../form';

const UpdatePage = () => {
  //#region Data
  const { id } = useParams();

  const navigate = useNavigate();

  const { data, error, isError } = useQuery({
    queryKey: ['page-detail', id],
    queryFn: () => getPageById(id as string),
  });

  if (error && isError) {
    toast.error((error as any)?.response?.data?.message || 'Có lỗi xảy ra!');
  }

  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<IUpdatePageForm>({
    mode: 'all',
    resolver: pageResolver,
    defaultValues: data?.data?.data || defaultValuesPage,
  });
  //#endregion

  //#region Event
  useEffect(() => {
    if (data?.data?.data) {
      reset({
        ...data?.data?.data,
      });
    }
  }, [data]);

  const onCancel = () => {
    reset(defaultValuesPage);
    navigate(-1);
  };

  const onSubmit = () => {
    handleSubmit(async (values) => {
      try {
        await updatePage(id || '', {
          image_id: values.image?.id,
          description: values.description,
          is_public: values.is_public,
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
    <div>
      <Box mb={3}>
        <Typography variant="page-title">Edit</Typography>
      </Box>

      <Paper variant="wrapper">
        <form>
          <MPageForm control={control} />

          <CActionsForm
            onCancel={onCancel}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
          />
        </form>
      </Paper>
    </div>
  );
  //#endregion
};

export default UpdatePage;
