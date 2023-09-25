import { IGetInfoResponse } from "@/types/info";

export interface IMInfoTableProps {
  data: IGetInfoResponse[];

  onEdit: (id: string) => void;

  onDelete: (id: string) => void;

  page: number;

  loading: boolean;
}
