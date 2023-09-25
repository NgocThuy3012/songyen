import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { CActionsForm } from "@/controls/";

import { ICreateHarvestForm } from "@/types/harvest";
import { MHarvestForm } from "../../components/MHarvestForm";
import { getDetailHarvest, updateHarvest } from "@/apis/categories.api";
import { defaultValuesHarvest, harvestResolver } from "../../form";

const UpdateHarvestPage = () => {
  const navigate = useNavigate();

  //#region Data
  const { id } = useParams();

  const { data, error, isError } = useQuery(
    ["Harvest", id],
    () => getDetailHarvest(id || ""),
    { enabled: !!id }
  );

  if (error && isError) {
    toast.error((error as any)?.response?.data?.message || "Something error");
  }

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

  //#endregion

  //#region Event
  useEffect(() => {
    if (data?.data?.data) {
      const harvest = data?.data?.data;

      reset({
        ...harvest,
        page_id: harvest?.page?.id,
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
        await updateHarvest(id || "", values);

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
        <Typography variant="page-title">Cập nhật</Typography>
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

export default UpdateHarvestPage;
