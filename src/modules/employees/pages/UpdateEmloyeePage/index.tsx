import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getDetailEmployee, updateEmployee } from '@/apis/employees.api';
import { CActionsForm } from '@/controls/';
import { ICreateEmployeeForm } from '@/types/employees';

import { MEmployeeForm } from '../../components/MEmployeeForm';
import { defaultValuesPost, employeeResolver } from '../../form';

const UpdateEmployeePage = () => {
  const navigate = useNavigate();

  //#region Data
  const { id } = useParams();

  const { data, error, isError } = useQuery(
    ['user', id],
    () => getDetailEmployee(id || ''),
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
  } = useForm<ICreateEmployeeForm>({
    mode: 'all',
    resolver: employeeResolver,
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
        await updateEmployee(id || '', {
          ...values,
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
          <MEmployeeForm control={control} create={false} />

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

export default UpdateEmployeePage;
