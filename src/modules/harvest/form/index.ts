import { Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { ICreateHarvestForm } from "@/types/harvest";

export const defaultValuesHarvest: ICreateHarvestForm = {
  page_id: "",
  name: "",
  is_public: true,
  pin_homepage: true,
};

export const harvestResolver: Resolver<ICreateHarvestForm> = yupResolver(
  object({
    page_id: string().required("Please select page!"),
    name: string().required("Please enter title!"),
  })
);
