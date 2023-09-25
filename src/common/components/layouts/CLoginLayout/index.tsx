import { shallowEqual, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import LoginPage from "@/modules/auth/pages/LoginPage";
import { RootState } from "@/redux/";
import { ROUTES } from "@/routes/routes";

export const CLoginLayout = () => {
  const userDataJSON = localStorage.getItem("authenticatedUser");

  // Bỏ comment bên dưới
  if (!userDataJSON) return <LoginPage />;

  return <Navigate to={ROUTES.HOME} replace={true} />;
};
