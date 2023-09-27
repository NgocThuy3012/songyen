import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { getDetailEmployee, updateEmployee } from "@/apis/employees.api";
import { CActionsForm } from "@/controls/";

import { defaultValuesPost, employeeResolver } from "../../form";
import { MSaleForm } from "../../components/MSaleForm";
import { ICreateSaleForm } from "@/types/sales";
import { item } from "@/mock/sale";

const UpdateSalePage = () => {
  const navigate = useNavigate();

  //#region Data
  const { id } = useParams();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ICreateSaleForm>({
    mode: "all",
    resolver: employeeResolver,
    defaultValues: defaultValuesPost,
  });

  //#endregion

  //#region Event
  useEffect(() => {
    if (item) {
      reset({
        ...item,
      });
    }
  }, [item]);

  const onCancel = () => {
    reset();

    navigate(-1);
  };

  const onSubmit = () => {
    handleSubmit(async (values) => {
      try {
        await updateEmployee(id || "", {
          ...values,
        });

        toast.success("Update success!");

        onCancel();
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "Update fail!");
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
          <MSaleForm control={control} create={false} />

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

export default UpdateSalePage;
