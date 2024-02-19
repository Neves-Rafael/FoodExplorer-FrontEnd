import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../service/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function sessionLogin({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    } else {
      return;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ sessionLogin, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
