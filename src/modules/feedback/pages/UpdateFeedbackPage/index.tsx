import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getDetailFeedback, updateFeedback } from '@/apis/feedback.api';
import { CActionsForm } from '@/controls/';
import { ICreateFeedbackForm } from '@/types/feedback';

import { MFeedbackForm } from '../../components';
import { defaultValuesPost, feedbackResolver } from '../../form';

const UpdateFeedbackPage = () => {
  const navigate = useNavigate();

  //#region Data
  const { id } = useParams();

  const { data, error, isError } = useQuery(
    ['feedback', id],
    () => getDetailFeedback(id || ''),
    { enabled: !!id },
  );

  if (error && isError) {
    toast.error((error as any)?.response?.data?.message || 'Something error');
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ICreateFeedbackForm>({
    mode: 'all',
    resolver: feedbackResolver,
    defaultValues: defaultValuesPost,
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
    reset();

    navigate(-1);
  };

  const onSubmit = () => {
    handleSubmit(async (values) => {
      try {
        await updateFeedback(id || '', {
          ...values,
          image_id: values.image?.id,
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
          <MFeedbackForm control={control} />

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

export default UpdateFeedbackPage;
