import { Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
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
};

export const warehouseResolver: Resolver<ICreateWarehouseForm> = yupResolver(
  object({
    // page_id: string().required("Please select page!"),
    // category_id: string().required("Please select category!"),
    // title: string().required("Please enter title!"),
    // description: string().required("Please enter description!"),
    // content: string().required("Please enter content!"),
    // image: object({
    //   id: string().required("Please choose image!"),
    // }).required("Please choose image!"),
    // background: object({
    //   id: string().required("Please choose image!"),
    // }).required("Please choose background!"),
  })
);
