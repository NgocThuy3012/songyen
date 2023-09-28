import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { getDetailPost, updateBlog } from "@/apis/posts.api";
import { CActionsForm } from "@/controls/";
import { ICreateWarehouseForm } from "@/types/warehouse";

import { defaultValuesPost, warehouseResolver } from "../../form";
import { MWarehouseForm } from "../../components";
import { item } from "@/mock/warehouse";
import { IGetHarvestResponse } from "@/types/harvest";
import dayjs from "dayjs";
import { IGetSalesResponse } from "@/types/sales";

const UpdateWarehousePage = () => {
  const navigate = useNavigate();

  //#region Data
  const { id } = useParams();

  const [data, setData] = useState<IGetHarvestResponse>();

  useEffect(() => {
    const existingDataStr = localStorage.getItem("harvestData");

    if (existingDataStr) {
      const array: IGetHarvestResponse[] = JSON.parse(existingDataStr);

      const foundIndex = array.findIndex((item) => item.id === id);

      if (foundIndex !== -1) {
        setData(array[foundIndex]);
      }
    }
  }, [id]);

  const {
    control,
    reset,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ICreateWarehouseForm>({
    mode: "all",
    resolver: warehouseResolver,
    defaultValues: defaultValuesPost,
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
      const existingDataStr = localStorage.getItem("warehouseData");
      let existingData: IGetSalesResponse[] = [];

      if (existingDataStr) {
        existingData = JSON.parse(existingDataStr);
      }

      existingData.push({ id: "wh" + Math.random(), ...values });

      localStorage.setItem("warehouseData", JSON.stringify(existingData));
    })();
    navigate(-1);
  };

  const onChangeDate = (name: string, value: Date) => {
    if (value) {
      const formattedDate = dayjs(value).format("DD/MM/YYYY");

      if (name == "date" || name == "inputDate") {
        setValue(name, formattedDate);
      }
    }
  };
  //#endregion

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">Nhập thông tin kho</Typography>
      </Box>

      <Paper variant="wrapper">
        <form>
          <MWarehouseForm
            control={control}
            onChangeDate={(name, value) => onChangeDate(name, value)}
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

export default UpdateWarehousePage;
