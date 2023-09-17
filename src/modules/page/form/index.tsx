import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';

import { IUpdatePageForm, IUpdatePageParams } from '@/types/page';

export const defaultValuesPage: IUpdatePageParams = {
  image_id: '',
  description: '',
  is_public: false,
};

export const pageResolver: Resolver<IUpdatePageForm> = yupResolver(
  object({
    image: object().required('Please select image!'),
  }),
);
