import { Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import { ICreateSaleParams } from "@/types/sales";

export const defaultValuesPost: ICreateSaleParams = {
  code: "",

  acreage: 0,

  address: "",

  date: "",

  weight: 0,

  plot: "",

  inputDate: "",

  importLot: "",

  warehousingPerson: "",

  humidity: "",

  dateSale: "",

  saleLot: "",

  saleWeight: 0,

  unit: "",

  salePerson: "",

  saleHumidity: "",
  inputWeight: 0,
};

export const saleResolver: Resolver<ICreateSaleParams> = yupResolver(
  object({
    username: string().required("Please enter name!"),
    fullname: string().required("Please enter full name!"),
    password: string().required("Please enter password!"),
  })
);
