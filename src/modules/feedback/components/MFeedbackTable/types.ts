import { IGetFeedbackResponse } from '@/types/feedback';

export interface IMFeedbackTableProps {
  data: IGetFeedbackResponse[];

  page: number;

  loading: boolean;

  onEdit: (id: string) => void;

  onDelete: (id: string) => void;
}
