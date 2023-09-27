import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { CActionsForm } from "@/controls/";

import { ICreateHarvestForm } from "@/types/harvest";
import { MHarvestForm } from "../../components/MHarvestForm";
import { defaultValuesHarvest, harvestResolver } from "../../form";
import { item } from "@/mock/harvest";

const UpdateHarvestPage = () => {
  const navigate = useNavigate();

  //#region Data
  const { id } = useParams();

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
    reset({
      ...item,
    });
  }, [item]);

  const onCancel = () => {
    reset();

    navigate(-1);
  };

  const onSubmit = () => {
    handleSubmit((values) => {
      console.log("value", values);
    })();

    navigate(-1);
  };
  //#endregion

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">Nhập thông tin thu hoạch</Typography>
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
