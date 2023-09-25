import { IFormInputComponentProps, IFormInputComponentRef } from "@/types/form";

export interface ICDateRef extends IFormInputComponentRef {}

export interface ICDateProps extends IFormInputComponentProps {
  value?: string;
  disabled?: boolean;
}
