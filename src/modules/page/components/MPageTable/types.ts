import { IGetPageResponse } from '@/types/page';

export interface IMPageTableProps {
  data: IGetPageResponse[];

  page: number;

  loading: boolean;

  onEdit: (id: string) => void;
}
