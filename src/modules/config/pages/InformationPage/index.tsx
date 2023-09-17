import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getConfig } from '@/apis/configs.api';
import { updateInformation } from '@/apis/configs.api';
import { CActionsForm } from '@/controls/';
import { IUpdateInformationForm } from '@/types/configs';

import { MInformationForm } from '../../components';
import { defaultValuesInformation, informationResolver } from '../../form';

const InformationPage = () => {
  const navigate = useNavigate();

  //#region Data

  const { data, error, isError } = useQuery(['config'], () => getConfig());

  if (error && isError) {
    toast.error((error as any)?.response?.data?.message || 'Something error');
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IUpdateInformationForm>({
    mode: 'all',
    resolver: informationResolver,
    defaultValues: defaultValuesInformation,
  });

  //#endregion

  //#region Event
  useEffect(() => {
    if (data?.data?.data?.information) {
      reset({
        ...data.data.data.information,
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
        await updateInformation(values);

        toast.success('Update success!');
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
        <Typography variant="page-title">Information</Typography>
      </Box>

      <Paper variant="wrapper">
        <form>
          <MInformationForm control={control} />

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

export default InformationPage;
