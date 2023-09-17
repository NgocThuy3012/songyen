import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import { ICreateCustomerParams } from '@/types/customers';

export const defaultValuesPost: ICreateCustomerParams = {
  image_id: '',
  name: '',
  url: '',
  is_public: true,
};

export const customerResolver: Resolver<ICreateCustomerParams> = yupResolver(
  object({
    name: string().required('Please enter name!'),
    image: object().required('Please select image!'),
    url: string().required('Please enter url!'),
  }),
);
