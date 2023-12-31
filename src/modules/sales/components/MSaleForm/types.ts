import { ICreateSaleForm } from "@/types/sales";
import { Control } from "react-hook-form";

export interface IMSaleFormProps {
  control: Control<ICreateSaleForm, any>;
  onChangeDate: (name: string, value: Date) => void;
}
