import { Control } from 'react-hook-form';

import { ICreateMemberForm } from '@/types/members';

export interface IMMemberFormProps {
  control: Control<ICreateMemberForm, any>;
}
