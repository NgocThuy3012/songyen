import { Control } from 'react-hook-form';

import { ICreateFeedbackForm } from '@/types/feedback';

export interface IMFeedbackFormProps {
  control: Control<ICreateFeedbackForm, any>;
}
