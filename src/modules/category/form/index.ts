import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import { ICreateCategoryForm } from '@/types/categories';
export const defaultValuesCategory: ICreateCategoryForm = {
  page_id: '',
  name: '',
  is_public: true,
  pin_homepage: true,
};

export const categoryResolver: Resolver<ICreateCategoryForm> = yupResolver(
  object({
    page_id: string().required('Please select page!'),
    name: string().required('Please enter title!'),
  }),
);
