import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';

import { createEmployee } from '@/apis/employees.api';
import { CActionsForm } from '@/controls/';
import { ICreateEmployeeForm } from '@/types/employees';

import { MEmployeeForm } from '../../components/MEmployeeForm';
import { defaultValuesPost, employeeResolver } from '../../form';

const CreateEmployeePage = () => {
  //#region Data
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
        await createEmployee({
          ...values,
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
          <MEmployeeForm control={control} create={true} />

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

export default CreateEmployeePage;
