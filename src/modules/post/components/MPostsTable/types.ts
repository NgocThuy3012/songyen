import { IGetPostsResponse } from '@/types/posts';

export interface IMPostsTableProps {
  page: number;

  loading: boolean;

  data: IGetPostsResponse[];

  onEdit: (id: string) => void;

  onDelete: (id: string) => void;
}
