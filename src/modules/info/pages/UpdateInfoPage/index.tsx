import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { CActionsForm } from "@/controls/";
import { getDetailInfo, updateInfo } from "@/apis/info.api";
import { ICreateInfoForm, IGetInfoResponse } from "@/types/info";
import { defaultValuesPost, infoResolver } from "../../form";
import { MInfoForm } from "../../components";
import { item } from "@/mock/info";

const UpdateInfoPage = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<IGetInfoResponse>();

  //#region Data
  const { id } = useParams();

  useEffect(() => {
    const existingDataStr = localStorage.getItem("infoData");

    if (existingDataStr) {
      const array: IGetInfoResponse[] = JSON.parse(existingDataStr);

      const foundIndex = array.findIndex((item) => item.id === id);

      if (foundIndex !== -1) {
        setData(array[foundIndex]);
      }
    }
  }, [id]);

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
    if (data) {
      reset({
        ...data,
      });
    }
  }, [data]);

  const onCancel = () => {
    reset();

    navigate(-1);
  };

  const onSubmit = () => {
    handleSubmit(async (values) => {
      const existingDataStr = localStorage.getItem("infoData");

      if (existingDataStr) {
        const array: IGetInfoResponse[] = JSON.parse(existingDataStr);

        const foundIndex = array.findIndex((item) => item.id === id);

        if (foundIndex !== -1) {
          array[foundIndex] = { ...array[foundIndex], ...values };
        }
        console.log("value", values);
        localStorage.setItem("infoData", JSON.stringify(array));
        navigate(-1);
      }
    })();
  };
  //#endregion

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">Nhập thông tin nhà yến</Typography>
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
