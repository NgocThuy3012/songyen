import { Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { number, object, string } from "yup";
import { ICreateWarehouseForm } from "@/types/warehouse";

export const defaultValuesPost: ICreateWarehouseForm = {
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

  inputWeight: 0,
};

export const warehouseResolver: Resolver<ICreateWarehouseForm> = yupResolver(
  object({
    inputDate: string().required("Vui lòng chọn ngày nhập kho!"),
    importLot: string().required("Vui lòng nhập lô nhập kho!"),
    humidity: string().required("Vui lòng nhập độ ẩm!"),
    warehousingPerson: string().required("Vui lòng nhập người nhập kho!"),
    inputWeight: number().required("Vui lòng nhập trọng lượng!"),
  })
);
