import { IGetWarehouseResponse } from "@/types/warehouse";

export interface IMWarehouseTableProps {
  page?: number;

  loading?: boolean;

  data: IGetWarehouseResponse[];

  onEdit: (id: string) => void;
}
