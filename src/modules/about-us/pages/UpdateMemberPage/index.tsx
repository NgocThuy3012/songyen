import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getDetailMember, updateMember } from '@/apis/members.api';
import { CActionsForm } from '@/controls/';
import { IUpdateMemberForm } from '@/types/members';

import { MMemberForm } from '../../components';
import { defaultValuesMember, memberResolver } from '../../form';

const CreateMemberPage = () => {
  //#region Data
  const { id } = useParams();

  const { data, error, isError } = useQuery(
    ['page', id],
    () => getDetailMember(id || ''),
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
  } = useForm<IUpdateMemberForm>({
    mode: 'all',
    resolver: memberResolver,
    defaultValues: data?.data?.data || defaultValuesMember,
  });

  const navigate = useNavigate();
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
        await updateMember(id || '', {
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
        <Typography variant="page-title">Update</Typography>
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
