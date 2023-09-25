import { Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { number, object, string } from "yup";
import { ICreateInfoParams } from "@/types/info";

export const defaultValuesPost: ICreateInfoParams = {
  code: "",

  address: "",

  acreage: 0,
};

export const infoResolver: Resolver<ICreateInfoParams> = yupResolver(
  object({
    code: string().required("Vui lòng nhập mã cơ sở!"),
    address: string().required("Vui lòng nhập địa chỉ!"),
    acreage: number().required("Vui lòng nhập diện tích!"),
  })
);
