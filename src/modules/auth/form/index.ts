import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import { ILoginParams } from '@/types/auth';

export const defaultValues = {
  username: '',
  password: '',
};

export const loginResolver: Resolver<ILoginParams> = yupResolver(
  object({
    username: string()
      .required('Please enter username!')
      .trim('Username contains invalid spaces!'),
    password: string()
      .required('Please enter password!')
      .trim('Password contains invalid spaces!'),
  }),
);
