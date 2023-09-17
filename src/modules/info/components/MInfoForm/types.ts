import { Control } from 'react-hook-form';

import { ICreateCustomerForm } from '@/types/customers';

export interface IMCustomerFormProps {
  control: Control<ICreateCustomerForm, any>;
}
