import { IGetMembersResponse } from '@/types/members';

export interface IMPostsTableProps {
  data: IGetMembersResponse[];

  page: number;

  loading: boolean;

  onEdit: (id: string) => void;

  onDelete: (id: string) => void;
}
