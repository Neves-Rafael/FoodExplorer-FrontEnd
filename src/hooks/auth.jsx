import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../service/api";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function sessionLogin({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password },{  withCredentials: true });
      const { user } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

      setData({ user });
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível entrar.");
      }
    }
  }

  function logout() {
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("pedidos");

    setData({});
  }

  async function createPlate({ plate, image }) {
    try {
      const plateForm = await api.post("/plates", plate);
      const { plateId } = plateForm.data;

      if (image) {
        const uploadImage = new FormData();
        uploadImage.append("image", image);

        await api.patch(`/plates/image/${plateId}`, uploadImage);
      }
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível entrar.");
      }
    }
  }

  async function updatePlate({ plate, image}){
    try {
      await api.put(`/plates/${plate.id}`, plate);

      if (image) {
        const uploadImage = new FormData();
        uploadImage.append("image", image);

        await api.patch(`/plates/image/${plate.id}`, uploadImage);
      }
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível atualizar.");
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");

    if (user) {
      setData({ user: JSON.parse(user)});
    } else {
      return;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        sessionLogin,
        logout,
        createPlate,
        updatePlate,
        user: data.user,
      }}>
      {children}
    </AuthContext.Provider>
  );

}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
