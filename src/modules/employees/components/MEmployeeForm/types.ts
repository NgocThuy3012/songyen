import { Control } from 'react-hook-form';

import { ICreateEmployeeForm } from '@/types/employees';

export interface IMEmployeeFormProps {
  control: Control<ICreateEmployeeForm, any>;
  create: boolean;
}
