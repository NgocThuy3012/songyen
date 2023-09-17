import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getDetailCategory, updateCAtegory } from '@/apis/categories.api';
import { CActionsForm } from '@/controls/';
import { ICreateCategoryForm } from '@/types/categories';

import { MCategoryForm } from '../../components/MCategoryForm';
import { categoryResolver, defaultValuesCategory } from '../../form';

const UpdateCategoryPage = () => {
  const navigate = useNavigate();

  //#region Data
  const { id } = useParams();

  const { data, error, isError } = useQuery(
    ['Category', id],
    () => getDetailCategory(id || ''),
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
  } = useForm<ICreateCategoryForm>({
    mode: 'all',
    resolver: categoryResolver,
    defaultValues: defaultValuesCategory,
  });

  //#endregion

  //#region Event
  useEffect(() => {
    if (data?.data?.data) {
      const category = data?.data?.data;

      reset({
        ...category,
        page_id: category?.page?.id,
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
        await updateCAtegory(id || '', values);

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

export default UpdateCategoryPage;
