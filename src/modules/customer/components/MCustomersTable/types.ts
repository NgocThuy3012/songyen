import { IGetCustomersResponse } from '@/types/customers';

export interface IMCustomersTableProps {
  data: IGetCustomersResponse[];

  onEdit: (id: string) => void;

  onDelete: (id: string) => void;

  page: number;

  loading: boolean;
}
