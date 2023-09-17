import { Controller, useFieldArray } from "react-hook-form";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Grid, Stack, SxProps, Theme } from "@mui/material";

import { CFormLabel, CInput } from "@/controls/";
import { FOOTER_TYPES } from "@/types/configs";

import { IMFooterFormProps } from "./types";
//stackoverflow.com/questions/63998373/is-there-a-material-ui-based-tree-select-component
//codesandbox.io/s/mui-tree-select-sample-easy-wujtg5?file=/index.js

const removeBtnStyle: SxProps<Theme> = {
  color: "#F45252",
  cursor: "pointer",
  "&:hover": {
    color: "rgb(244, 82, 82, 0.7)",
  },
};

const addBtnWrapperStyle: SxProps<Theme> = {
  backgroundColor: "#1da996",
  borderRadius: "5px",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgb(164, 198, 57, 0.7)",
  },
};

const addBtnStyle: SxProps<Theme> = {
  color: "white",
};

export const MFooterForm: React.FC<IMFooterFormProps> = ({
  control,
  // onAddUsefulLink,
}) => {
  //#region Ref

  //#endregion

  //#region Data
  const usefulField = useFieldArray({
    control,
    name: "useful_links",
  });

  const pageField = useFieldArray({
    control,
    name: "additional_pages",
  });
  //#endregion

  //#region Event
  const onAddUsefulLink = () => {
    usefulField.append({
      name: "",
      value: "",
      footer_type: FOOTER_TYPES.USEFUL_LINKS,
    });
  };

  const onRemoveUsefulLink = (index: number, total: number) => {
    if (total > 1) {
      usefulField.remove(index);
    }
  };

  const onAddAddtionalPage = () => {
    pageField.append({
      name: "",
      value: "",
      footer_type: FOOTER_TYPES.ADDITIONAL_PAGES,
    });
  };

  const onRemoveAddtionalPage = (index: number, total: number) => {
    if (total > 1) {
      pageField.remove(index);
    }
  };
  //#endregion

  //#region Cycle
  //#endregion

  //#region Render
  return (
    <>
      <Stack direction="column" spacing={1} mb={2} flex={1}>
        <CFormLabel label="Finance Business" required />
        <Controller
          control={control}
          name="finance_business.value"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="finance_business"
              placeholder="Enter here..."
              multiline
              rows={1}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="column" spacing={1} mb={2} flex={1}>
        <CFormLabel label="Useful Links" required />

        {usefulField.fields.map((item, index) => {
          return (
            <Grid key={item.id} container my={2.5} gap={2}>
              <Grid item xs={4}>
                <Stack direction="column" flex={1}>
                  <Controller
                    control={control}
                    name={`useful_links.${index}.name`}
                    render={({ field, fieldState: { error } }) => (
                      <CInput
                        {...field}
                        placeholder="Enter here..."
                        error={!!error}
                        helperText={error?.message}
                      />
                    )}
                  />
                </Stack>
              </Grid>
              <Grid item flex={1}>
                <Stack direction="column" flex={1}>
                  <Controller
                    control={control}
                    name={`useful_links.${index}.value`}
                    render={({ field, fieldState: { error } }) => (
                      <CInput
                        {...field}
                        placeholder="Enter here..."
                        error={!!error}
                        helperText={error?.message}
                      />
                    )}
                  />
                </Stack>
              </Grid>
              <Grid
                item
                onClick={() =>
                  onRemoveUsefulLink(index, usefulField.fields.length)
                }
              >
                <RemoveCircleOutline sx={removeBtnStyle} />
              </Grid>
            </Grid>
          );
        })}

        <Stack flex={1} alignItems="center" pt={2.5}>
          <Stack
            direction="column"
            width={44}
            height={44}
            onClick={onAddUsefulLink}
            sx={addBtnWrapperStyle}
          >
            <AddCircleOutline sx={addBtnStyle} />
          </Stack>
        </Stack>
      </Stack>

      <Stack direction="column" spacing={1} mb={2} mt={5} flex={1}>
        <CFormLabel label="Additional Pages" required />

        {pageField.fields.map((item, index) => (
          <Grid key={item.id} container my={2.5} gap={2}>
            <Grid item xs={4}>
              <Stack direction="column" flex={1}>
                <Controller
                  control={control}
                  name={`additional_pages.${index}.name`}
                  render={({ field, fieldState: { error } }) => (
                    <CInput
                      {...field}
                      placeholder="Enter here..."
                      error={!!error}
                      helperText={error?.message}
                    />
                  )}
                />
              </Stack>
            </Grid>
            <Grid item flex={1}>
              <Stack direction="column" flex={1}>
                <Controller
                  control={control}
                  name={`additional_pages.${index}.value`}
                  render={({ field, fieldState: { error } }) => (
                    <CInput
                      {...field}
                      placeholder="Enter here..."
                      error={!!error}
                      helperText={error?.message}
                    />
                  )}
                />
              </Stack>
            </Grid>
            <Grid
              item
              onClick={() =>
                onRemoveAddtionalPage(index, pageField.fields.length)
              }
            >
              <RemoveCircleOutline sx={removeBtnStyle} />
            </Grid>
          </Grid>
        ))}

        <Stack flex={1} alignItems="center" pt={2.5}>
          <Stack
            direction="column"
            width={44}
            height={44}
            onClick={onAddAddtionalPage}
            sx={addBtnWrapperStyle}
          >
            <AddCircleOutline sx={addBtnStyle} />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
  //#endregion
};
