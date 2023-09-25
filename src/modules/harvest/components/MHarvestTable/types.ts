import { IGetHarvestResponse } from "@/types/harvest";

export interface IMHarvestTableProps {
  data: IGetHarvestResponse[];

  page: number;

  loading: boolean;

  onEdit: (id: string) => void;

  onDelete: (id: string) => void;
}
