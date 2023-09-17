import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { array, object, string } from 'yup';

import {
  FOOTER_TYPES,
  IUpdateFooterForm,
  IUpdateInformationParams,
} from '@/types/configs';

export const defaultValuesInformation: IUpdateInformationParams = {
  phone1: '',
  phone2: '',
  email1: '',
  email2: '',
  location: '',
  facebook: '',
  twitter: '',
  linkedin: '',
};

export const defaultValuesFooter: IUpdateFooterForm = {
  finance_business: {
    name: '',
    value: '',
    footer_type: FOOTER_TYPES.FINANCE_BUSINESS,
  },
  useful_links: [],
  additional_pages: [],
};

export const informationResolver: Resolver<IUpdateInformationParams> =
  yupResolver(
    object({
      phone1: string().required('Please enter default phone!'),
      email1: string().required('Please enter default email!'),
    }),
  );

export const footerResolver: Resolver<IUpdateFooterForm> = yupResolver(
  object({
    finance_business: object({
      value: string().trim().required('Please enter finance business!'),
    }),

    useful_links: array()
      .of(
        object({
          name: string().trim().required('Please enter name!'),
          value: string().trim().required('Please enter value!'),
        }),
      )
      .required('Please enter useful links!'),

    additional_pages: array()
      .of(
        object({
          name: string().trim().required('Please enter name!'),
          value: string().trim().required('Please enter value!'),
        }),
      )
      .required('Please enter additional pages!'),
  }),
);
