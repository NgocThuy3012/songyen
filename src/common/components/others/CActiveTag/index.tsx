import { Visibility, VisibilityOff } from '@mui/icons-material';

import { ICActiveTagProps } from './types';

export const CActiveTag: React.FC<ICActiveTagProps> = ({ value }) => {
  return value ? (
    <Visibility color="primary" />
  ) : (
    <VisibilityOff
      sx={{
        '&.MuiSvgIcon-root': {
          color: '#3A3A3A',
        },
      }}
    />
  );
};
