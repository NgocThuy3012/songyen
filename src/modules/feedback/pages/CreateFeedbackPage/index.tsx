import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';

import { createFeedback } from '@/apis/feedback.api';
import { CActionsForm } from '@/controls/';
import { ICreateFeedbackForm } from '@/types/feedback';

import { MFeedbackForm } from '../../components';
import { defaultValuesPost, feedbackResolver } from '../../form';

const CreateFeedbackPage = () => {
  //#region Data
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
        await createFeedback({
          ...values,
          image_id: values.image?.id,
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

export default CreateFeedbackPage;
