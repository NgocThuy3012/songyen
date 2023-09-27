import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, Paper, Typography } from "@mui/material";

import { CActionsForm } from "@/controls/";

import { defaultValuesPost, infoResolver } from "../../form";
import { ICreateInfoForm } from "@/types/info";
import { MInfoForm } from "../../components";
import { createInfo } from "@/apis/info.api";

const CreateInfoPage = () => {
  //#region Data
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ICreateInfoForm>({
    mode: "all",
    resolver: infoResolver,
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
      console.log("values", values);
      // try {
      //   await createInfo({
      //     ...values,
      //   });

      //   toast.success("Create success!");

      //   onCancel();
      // } catch (error: any) {
      //   toast.error(error?.response?.data?.message || "Create fail!");
      // }
    })();
  };
  //#endregion

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">Thêm </Typography>
      </Box>

      <Paper variant="wrapper">
        <form>
          <MInfoForm control={control} />

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

export default CreateInfoPage;
