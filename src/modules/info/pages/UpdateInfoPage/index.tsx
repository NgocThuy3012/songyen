import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { CActionsForm } from "@/controls/";
import { getDetailInfo, updateInfo } from "@/apis/info.api";
import { ICreateInfoForm } from "@/types/info";
import { defaultValuesPost, infoResolver } from "../../form";
import { MInfoForm } from "../../components";
import { item } from "@/mock/info";

const UpdateInfoPage = () => {
  const navigate = useNavigate();

  //#region Data
  const { id } = useParams();

  const { data, error, isError } = useQuery(
    ["info", id],
    () => getDetailInfo(id || ""),
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
  } = useForm<ICreateInfoForm>({
    mode: "all",
    resolver: infoResolver,
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
      console.log("value", values);
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

export default UpdateInfoPage;
