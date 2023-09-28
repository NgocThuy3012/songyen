import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, Paper, Typography } from "@mui/material";

import { CActionsForm } from "@/controls/";

import { defaultValuesPost, infoResolver } from "../../form";
import { ICreateInfoForm, IGetInfoResponse } from "@/types/info";
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
      const existingDataStr = localStorage.getItem("infoData");
      let existingData: IGetInfoResponse[] = [];

      if (existingDataStr) {
        existingData = JSON.parse(existingDataStr);
      }

      existingData.push({ id: "cs" + Math.random(), ...values });

      localStorage.setItem("infoData", JSON.stringify(existingData));
    })();
    navigate(-1);
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
