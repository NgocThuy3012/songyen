import { IGetContactsResponse } from '@/types/contacts';

export const defaultContact: IGetContactsResponse = {
  id: '0',
  blog_names: [],
  fullname: '',
  message: '',
  email: '',
  phone: '',
  created_date: new Date(),
};

export interface IMContactsTableProps {
  data: IGetContactsResponse[];

  page: number;

  loading: boolean;
}
