import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import { ICreateFeedbackParams } from '@/types/feedback';

export const defaultValuesPost: ICreateFeedbackParams = {
  image_id: '',
  name: '',
  position: '',
  description: '',
  is_public: true,
};

export const feedbackResolver: Resolver<ICreateFeedbackParams> = yupResolver(
  object({
    name: string().required('Please enter name!'),
    position: string().required('Please enter position!'),
    description: string().required('Please enter description!'),
    image: object().required('Please select image!'),
  }),
);
