import { useEffect, useState } from "react";
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
import dayjs from "dayjs";
import { IGetInfoResponse } from "@/types/info";
import { IGetWarehouseResponse } from "@/types/warehouse";

const UpdateHarvestPage = () => {
  const navigate = useNavigate();

  //#region Data
  const { id } = useParams();

  const [data, setData] = useState<IGetInfoResponse>();

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
    setValue,
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
      ...data,
    });
  }, [data]);

  const onCancel = () => {
    reset();

    navigate(-1);
  };

  const onSubmit = () => {
    handleSubmit(async (values) => {
      console.log("values", values);
      const existingDataStr = localStorage.getItem("harvestData");
      let existingData: IGetWarehouseResponse[] = [];

      if (existingDataStr) {
        existingData = JSON.parse(existingDataStr);
      }

      existingData.push({ id: "th" + Math.random(), ...values });

      localStorage.setItem("harvestData", JSON.stringify(existingData));
    })();
    navigate(-1);
  };

  const onChangeDate = (value: Date) => {
    if (value) {
      const formattedDate = dayjs(value).format("DD/MM/YYYY");
      setValue("date", formattedDate);
    }
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
          <MHarvestForm
            control={control}
            onChangeDate={(value) => onChangeDate(value)}
          />

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
