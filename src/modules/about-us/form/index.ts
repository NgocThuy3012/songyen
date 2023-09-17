import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import { ICreateMemberParams } from '@/types/members';

export const defaultValuesMember: ICreateMemberParams = {
  description: '',
  name: '',
  position: '',
  is_public: true,
};

export const memberResolver: Resolver<ICreateMemberParams> = yupResolver(
  object({
    name: string().required('Please enter name!'),
    position: string().required('Please enter position!'),
    description: string().required('Please enter description!'),
    image: object().required('Please select image!'),
  }),
);
