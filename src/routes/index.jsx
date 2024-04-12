import { useEffect } from "react";
import { api } from "../service/api";
import { useAuth } from "../hooks/auth";
import { AuthRoutes } from "./auth.routes";
import { UserRoutes } from "./user.routes";
import { USER_ROLE } from "../utils/roles";
import { AdminRoutes } from "./admin.routes";
import { BrowserRouter } from "react-router-dom";

export function Routes() {
  const { user, logout } = useAuth();

  useEffect(() => {
    api.get("/users/validated").catch((error) => {
      if (error.response?.status === 401) logout();
    });
  }, []);

  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.USER:
        return <UserRoutes />;

      default:
        <UserRoutes />;
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>
  );
}
