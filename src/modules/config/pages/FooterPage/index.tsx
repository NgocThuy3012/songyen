import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getConfig, updateFooter } from '@/apis/configs.api';
import { CActionsForm } from '@/controls/';
import { FOOTER_TYPES, IUpdateFooterForm } from '@/types/configs';

import { MFooterForm } from '../../components/MFooterForm';
import { defaultValuesFooter, footerResolver } from '../../form';

const FooterPage = () => {
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
  } = useForm<IUpdateFooterForm>({
    mode: 'all',
    resolver: footerResolver,
    defaultValues: defaultValuesFooter,
  });

  //#endregion

  //#region Event
  useEffect(() => {
    if (data?.data?.data?.footer) {
      const footer = data?.data?.data?.footer;

      const financeBusiness = footer.find(
        (footer) => footer.footer_type === FOOTER_TYPES.FINANCE_BUSINESS,
      );

      const usefulLinks = footer.filter(
        (footer) => footer.footer_type === FOOTER_TYPES.USEFUL_LINKS,
      );

      const additionalPagesLinks = footer.filter(
        (footer) => footer.footer_type === FOOTER_TYPES.ADDITIONAL_PAGES,
      );

      reset({
        finance_business: financeBusiness,

        useful_links: usefulLinks,

        additional_pages: additionalPagesLinks,
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
        const payload = [
          values.finance_business,
          ...values.useful_links,
          ...values.additional_pages,
        ];

        await updateFooter({
          footer: payload,
        });

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
        <Typography variant="page-title">Footer</Typography>
      </Box>

      <Paper variant="wrapper">
        <form>
          <MFooterForm control={control} />

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

export default FooterPage;
