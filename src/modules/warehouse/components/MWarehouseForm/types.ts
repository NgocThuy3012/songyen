import { ICreateWarehouseForm } from "@/types/warehouse";
import { Control } from "react-hook-form";

export interface IMWarehouseFormProps {
  control: Control<ICreateWarehouseForm, any>;
  onChangeDate: (name: string, value: Date) => void;
}
