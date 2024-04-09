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

  async function createPayment({plateSum, requestPlate}){
    try {
      const insertPayment = await api.post("/payment", {
        plate: JSON.stringify(requestPlate),
        price: plateSum  
      })
      
      return(insertPayment.data[0].id)
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível fazer o pedido.");
      }
    }
  }

  async function updatePayment(id){
    try {
      await api.put(`/payment/qrcode/${id}`);

    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível atualizar.");
      }
    }
  }

  async function createFavorite(plate_id){
    try {
      await api.post("/favorites", {plate_id: plate_id})
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível adicionar aos Favoritos.");
      }
    }
  }

  async function createAccount({name, email, password}){
    if (!name || !email || !password) {
      return toast.dark("Preencha todos os campos!");
    }
    
    try {
      await api.post("/users", { name, email, password })
      .then(() => {
        toast.dark("Usuário cadastrado com sucesso!");
      })
      return "Create"
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else toast.dark("Não foi possível cadastrar!");
    }
  }

  async function updateAccount({name, email, newPassword, oldPassword}){
    
    try {
      await api.put("/users", { name, email, newPassword, oldPassword})
      .then(() => {
        toast.dark("Usuário atualizado com sucesso.");
      })
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else toast.dark("Não foi possível atualizar!");
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
        createPayment,
        updatePayment,
        createFavorite,
        createAccount,
        updateAccount,
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
