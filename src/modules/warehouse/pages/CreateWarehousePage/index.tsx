import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, Paper, Typography } from "@mui/material";

import { createBlog } from "@/apis/posts.api";
import { CActionsForm } from "@/controls/";

import { defaultValuesPost, postResolver } from "../../form";
import { MWarehouseForm } from "../../components";
import { ICreateWarehouseForm } from "@/types/warehouse";

const CreateWarehousePage = () => {
  //#region Data
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ICreateWarehouseForm>({
    mode: "all",
    resolver: postResolver,
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
        await createBlog({
          ...values,
        });

        toast.success("Create success!");

        onCancel();
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "Create fail!");
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
          <MWarehouseForm control={control} />

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

export default CreateWarehousePage;
