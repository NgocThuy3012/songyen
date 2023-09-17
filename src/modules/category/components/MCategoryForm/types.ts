import { Control } from 'react-hook-form';

import { ICreateCategoryForm } from '@/types/categories';

export interface IMCategoryFormProps {
  control: Control<ICreateCategoryForm, any>;
}
