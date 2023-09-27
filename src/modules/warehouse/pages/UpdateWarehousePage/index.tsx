import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { getDetailPost, updateBlog } from "@/apis/posts.api";
import { CActionsForm } from "@/controls/";
import { ICreateWarehouseForm } from "@/types/warehouse";

import { defaultValuesPost, warehouseResolver } from "../../form";
import { MWarehouseForm } from "../../components";
import { item } from "@/mock/warehouse";

const UpdateWarehousePage = () => {
  const navigate = useNavigate();

  //#region Data
  const { id } = useParams();

  // const { data, error, isError } = useQuery(
  //   ["page", id],
  //   () => getDetailPost(id || ""),
  //   { enabled: !!id }
  // );

  // if (error && isError) {
  //   toast.error((error as any)?.response?.data?.message || "Something error");
  // }

  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ICreateWarehouseForm>({
    mode: "all",
    resolver: warehouseResolver,
    defaultValues: defaultValuesPost,
  });
  //#endregion

  //#region Event

  useEffect(() => {
    reset({
      ...item,
    });
  }, [item]);

  const onCancel = () => {
    reset();

    navigate(-1);
  };

  const onSubmit = () => {
    handleSubmit(async (values) => {
      toast.success("Update success!");

      console.log("value", values);
    })();
  };
  //#endregion

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">Update</Typography>
      </Box>

      <Paper variant="wrapper">
        <form>
          <MWarehouseForm control={control} />

          <CActionsForm
            onCancel={onCancel}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
          />
        </form>
      </Paper>
    </>
  );
  //#endregion
};

export default UpdateWarehousePage;
