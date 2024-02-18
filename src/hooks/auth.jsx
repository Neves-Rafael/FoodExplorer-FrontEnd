import { createContext, useContext } from "react";
import { api } from "../service/api";
import { useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({children}){
  const [data, setData] = useState({});

  async function sessionsLogin({email, password}){
    try {
      const response = await api.post("/sessions", {  email, password });
      const { user, token } = response.data;

      setData({user, token})

      api.defaults.headers.authorization = `Bearer ${token}`;
    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possível entrar.")
      }
    }
  }

  return (
    <AuthContext.Provider value={{ sessionsLogin, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };