import { Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { number, object, string } from "yup";
import { ICreateHarvestForm } from "@/types/harvest";

export const defaultValuesHarvest: ICreateHarvestForm = {
  code: "",
  acreage: 0,

  address: "",

  date: "",

  weight: 0,

  plot: "",
};

export const harvestResolver: Resolver<ICreateHarvestForm> = yupResolver(
  object({
    code: string().required("Vui lòng nhập mã cơ sở!"),
    address: string().required("Vui lòng nhập địa chỉ!"),
    acreage: number().required("Vui lòng nhập diện tích!"),
    plot: string().required("Vui lòng nhập lô thu hoạch!"),
    weight: number().required("Vui lòng nhập trọng lượng!"),
  })
);
