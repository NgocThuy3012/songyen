import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import { ICDateProps } from "./types";
import { forwardRef } from "react";

export const CDatePicker = forwardRef<ICDateProps, ICDateProps>(
  ({ value, disabled, onChange, ...props }, ref) => {
    return (
      <div>
        <DatePicker
          disabled={disabled}
          value={value ? dayjs(value, "DD/MM/YYYY") : dayjs()}
          onChange={onChange}
          {...props}
        />
      </div>
    );
  }
);
