import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";

import { login } from "@/apis/auth.api";
import logo from "@/assets/images/login-logo.png";
import { getProfile } from "@/axios/index";
import { CInput, CInputPassword } from "@/controls/";
import { defaultValues, loginResolver } from "@/modules/auth/form";
import { setToken } from "@/slices/auth";
import { ILoginParams } from "@/types/auth";
import { auth } from "@/mock/auth";

const LoginPage = () => {
  //#region Data
  const { control, handleSubmit, reset } = useForm({
    resolver: loginResolver,
    mode: "all",
    defaultValues,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //#endregion

  //#region Event
  const onSubmit = async (values: ILoginParams) => {
    // try {
    //   const res = await login(values);

    //   const { access_token, refresh_token } = res.data.data;

    //   dispatch(setToken({ access_token, refresh_token }));

    //   await getProfile(access_token);

    //   toast.success("Login success!");
    //   navigate("/pages");

    //   reset(defaultValues);
    // } catch (error: any) {
    //   toast.error(error?.response?.data?.message || "Login fail!");
    // }

    const authenticatedUser = auth.find((user) => {
      return (
        user.username === values.username && user.password === values.password
      );
    });

    if (authenticatedUser) {
      toast.success("Login success!");

      localStorage.setItem(
        "authenticatedUser",
        JSON.stringify(authenticatedUser)
      );

      switch (authenticatedUser.role) {
        case 1:
          navigate("/info");
          break;
        case 2:
          navigate("/harvest");
          break;
        case 3:
          navigate("/warehouse");
          break;
        case 4:
          navigate("/export-sale");
          break;
      }

      console.log("Thông tin người dùng:", authenticatedUser);
    } else {
      toast.error("Login fail!");
    }
  };
  //#endregion

  //#region Render
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      // sx={{
      //   backgroundColor: "#1da996",
      // }}
    >
      <Box flex={1} position="relative">
        <Paper
          sx={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "absolute",
            borderRadius: 2,
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            padding: "16px",
          }}
        >
          <Box p={3} borderRadius="inherit">
            <Box mb="2.5rem">
              <Typography
                marginTop="2.5rem"
                textAlign="center"
                fontSize="2.5rem"
                fontWeight={800}
                color="#1da996"
                mb={2.5}
              >
                SONG YẾN
              </Typography>
            </Box>
            <Divider />
            <Typography
              marginTop="2.5rem"
              textAlign="center"
              fontSize="2.5rem"
              fontWeight={800}
              color="#282828"
              mb={2.5}
            >
              Login
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack direction="column" spacing={0.5} mb={1.5}>
                <Typography fontWeight={500}>Username</Typography>
                <Controller
                  control={control}
                  name="username"
                  render={({ field, fieldState: { error } }) => (
                    <CInput
                      placeholder="Enter username"
                      {...field}
                      error={!!error}
                      helperText={error?.message}
                    />
                  )}
                />
              </Stack>
              <Stack direction="column" spacing={0.5} mb={1.5}>
                <Typography fontWeight={500}>Password</Typography>
                <Controller
                  control={control}
                  name="password"
                  render={({ field, fieldState: { error } }) => (
                    <CInputPassword
                      placeholder="Enter password"
                      {...field}
                      error={!!error}
                      helperText={error?.message}
                    />
                  )}
                />
              </Stack>

              <Box textAlign="center" mt={4}>
                <Button type="submit">Login</Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
  //#endregion
};

export default LoginPage;
