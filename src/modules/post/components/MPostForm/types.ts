import { Control } from 'react-hook-form';

import { ICreateBlogForm } from '@/types/posts';

export interface IMPostFormProps {
  control: Control<ICreateBlogForm, any>;
}
