import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';

import { createMember } from '@/apis/members.api';
import { CActionsForm } from '@/controls/';
import { ICreateMemberForm } from '@/types/members';

import { MMemberForm } from '../../components';
import { defaultValuesMember, memberResolver } from '../../form';

const CreateMemberPage = () => {
  //#region Data
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ICreateMemberForm>({
    mode: 'all',
    resolver: memberResolver,
    defaultValues: defaultValuesMember,
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
        await createMember({
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
          <MMemberForm control={control} />

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

export default CreateMemberPage;
