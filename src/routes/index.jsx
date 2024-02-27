import { BrowserRouter } from "react-router-dom";
import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";
import { UserRoutes } from "./user.routes";
import { USER_ROLE } from "../utils/roles"; 

import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth();

  function AccessRoute(){
    switch(user.role){
      case USER_ROLE.ADMIN:
        return <AdminRoutes/>
      case USER_ROLE.USER:
        return <UserRoutes/>

      default:
        <UserRoutes/>
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoute/> : <AuthRoutes/>}
    </BrowserRouter>
  );
}
