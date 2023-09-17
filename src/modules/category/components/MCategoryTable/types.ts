import { IGetCategoryResponse } from '@/types/categories';

export interface IMCategoryTableProps {
  data: IGetCategoryResponse[];

  page: number;

  loading: boolean;

  onEdit: (id: string) => void;

  onDelete: (id: string) => void;
}
