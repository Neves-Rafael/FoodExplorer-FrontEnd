import { useEffect } from "react";
import { createContext, useState } from "react";
import { api } from "../service/api";

export const PlateContext = createContext();

export const PlateProvider = ({ children }) => {
  const [plateRequest, setPlateRequest] = useState([]);
  const [showAllPlates, setShowAllPlates] = useState([])
  
  const updateRequest = () => {
    setPlateRequest(JSON.parse(localStorage.getItem("pedidos")));
    return plateRequest;
  };

  useEffect(()=>{
    async function searchPlates(){
      const response = await api.get("/plates",);
      setShowAllPlates(response.data);
    }

    searchPlates();
  },[])


  return (
    <PlateContext.Provider value={{ updateRequest, plateRequest, showAllPlates }}>
      {children}
    </PlateContext.Provider>
  );
};
