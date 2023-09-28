import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { Box, Paper, Typography } from "@mui/material";

import { CActionsForm } from "@/controls/";

import { defaultValuesPost, saleResolver } from "../../form";
import { MSaleForm } from "../../components/MSaleForm";
import { ICreateSaleForm, IGetDetailSaleResponse } from "@/types/sales";
import { item } from "@/mock/sale";

import dayjs from "dayjs";
import { IGetWarehouseResponse } from "@/types/warehouse";

const UpdateSalePage = () => {
  const navigate = useNavigate();

  //#region Data
  const { id } = useParams();

  const [data, setData] = useState<IGetWarehouseResponse>();

  useEffect(() => {
    const existingDataStr = localStorage.getItem("warehouseData");

    if (existingDataStr) {
      const array: IGetWarehouseResponse[] = JSON.parse(existingDataStr);

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
  } = useForm<ICreateSaleForm>({
    mode: "all",
    resolver: saleResolver,
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
    console.log("values");
    handleSubmit(async (values) => {
      console.log("values", values);
      const existingDataStr = localStorage.getItem("saleData");
      let existingData: IGetDetailSaleResponse[] = [];

      if (existingDataStr) {
        existingData = JSON.parse(existingDataStr);
      }

      existingData.push({ id: "sl" + Math.random(), ...values });

      localStorage.setItem("saleData", JSON.stringify(existingData));
    })();
    navigate(-1);
  };

  const onChangeDate = (name: string, value: Date) => {
    if (value) {
      const formattedDate = dayjs(value).format("DD/MM/YYYY");

      if (name == "date" || name == "inputDate" || name == "dateSale") {
        setValue(name, formattedDate);
      }
    }
  };
  //#endregion

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">Nhập thông tin xuất bán</Typography>
      </Box>

      <Paper variant="wrapper">
        <form>
          <MSaleForm
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

export default UpdateSalePage;
