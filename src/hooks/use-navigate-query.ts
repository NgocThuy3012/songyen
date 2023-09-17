import { useNavigate } from 'react-router-dom';

import { objectToQueryString } from '@/funcs/';

export const useNavigateQuery = () => {
  const navigate = useNavigate();

  const navigateWithNewQuery = (newParams: any) => {
    console.log('New Params', newParams);

    console.log('Object Query To String', objectToQueryString(newParams));

    navigate('?' + objectToQueryString(newParams), {
      replace: true,
    });
  };

  return { navigateWithNewQuery };
};
