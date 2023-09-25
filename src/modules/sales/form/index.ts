import { Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import { ICreateEmployeeParams } from "@/types/sales";

export const defaultValuesPost: ICreateEmployeeParams = {
  fullname: "",
  username: "",
  email: "",
  password: "",
};

export const employeeResolver: Resolver<ICreateEmployeeParams> = yupResolver(
  object({
    username: string().required("Please enter name!"),
    fullname: string().required("Please enter full name!"),
    password: string().required("Please enter password!"),
  })
);
