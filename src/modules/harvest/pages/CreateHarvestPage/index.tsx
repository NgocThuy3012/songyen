import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, Paper, Typography } from "@mui/material";

import { CActionsForm } from "@/controls/";

import { ICreateHarvestForm } from "@/types/harvest";
import { MHarvestForm } from "../../components/MHarvestForm";
import { defaultValuesHarvest, harvestResolver } from "../../form";
import { createHarvest } from "@/apis/categories.api";

const CreateHarvestPage = () => {
  //#region Data
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ICreateHarvestForm>({
    mode: "all",
    resolver: harvestResolver,
    defaultValues: defaultValuesHarvest,
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
        await createHarvest(values);

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
          <MHarvestForm control={control} />

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

export default CreateHarvestPage;
