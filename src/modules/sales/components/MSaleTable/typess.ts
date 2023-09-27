import { IGetSalesResponse } from "@/types/sales";

export interface IMSalesTableProps {
  data: IGetSalesResponse[];

  onEdit: (id: string) => void;

  page: number;

  loading?: boolean;
}
