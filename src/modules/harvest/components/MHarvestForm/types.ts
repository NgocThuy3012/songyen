import { func } from "prop-types";
import { ICreateHarvestForm } from "@/types/harvest";
import { Control } from "react-hook-form";

export interface IMHarvestFormProps {
  control: Control<ICreateHarvestForm, any>;
  onChangeDate: (value: Date) => void;
}
