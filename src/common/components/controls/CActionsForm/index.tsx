import { LoadingButton } from "@mui/lab";
import { Stack, styled } from "@mui/material";

import { ICActionsFormProps } from "./types";

const StyledFormButton = styled(LoadingButton)(() => ({
  borderRadius: "10px",
  padding: "12.5px 32px",
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "19px",
}));

export const CActionsForm: React.FC<ICActionsFormProps> = ({
  onCancel,
  onSubmit,
  isSubmitting,
}) => {
  return (
    <Stack direction="row" spacing={3} justifyContent="end">
      <StyledFormButton
        id="cancel_btn"
        variant="outlined"
        color="primary"
        type="button"
        onClick={onCancel}
      >
        Huỷ
      </StyledFormButton>
      <StyledFormButton
        id="submit"
        variant="contained"
        color="primary"
        type="button"
        loading={isSubmitting}
        onClick={onSubmit}
      >
        Lưu
      </StyledFormButton>
    </Stack>
  );
};
