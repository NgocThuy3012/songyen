import { Control } from 'react-hook-form';

import { IPageDetailResponse } from '@/types/page';

export interface IMPageFormProps {
  control: Control<IPageDetailResponse | any>;
}
