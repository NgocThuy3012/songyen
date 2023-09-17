import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';

import { createCategory } from '@/apis/categories.api';
import { CActionsForm } from '@/controls/';
import { ICreateCategoryForm } from '@/types/categories';

import { MCategoryForm } from '../../components/MCategoryForm';
import { categoryResolver, defaultValuesCategory } from '../../form';

const CreateCategoryPage = () => {
  //#region Data
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ICreateCategoryForm>({
    mode: 'all',
    resolver: categoryResolver,
    defaultValues: defaultValuesCategory,
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
        await createCategory(values);

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
          <MCategoryForm control={control} />

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

export default CreateCategoryPage;
