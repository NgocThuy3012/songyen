import { Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { number, object, string } from "yup";
import { ICreateSaleForm } from "@/types/sales";

export const defaultValuesPost: ICreateSaleForm = {
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

export const saleResolver: Resolver<ICreateSaleForm> = yupResolver(
  object({
    dateSale: string().required("Vui lòng chọn ngày!"),
    saleLot: string().required("Vui lòng nhập lô xuất bán!"),
    saleHumidity: string().required("Vui lòng nhập độ ẩm!"),
    salePerson: string().required("Vui lòng nhập người xuất bán!"),
    saleWeight: number().required("Vui lòng nhập trọng lượng!"),
    unit: string().required("Vui lòng nhập đơn vị!"),
  })
);
