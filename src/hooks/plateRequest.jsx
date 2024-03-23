import { createContext, useState } from "react";

export const PlateContext = createContext();

export const PlateProvider = ({ children }) => {
  const [plateRequest, setPlateRequest] = useState([]);
  
  const updateRequest = () => {
    setPlateRequest(JSON.parse(localStorage.getItem("pedidos")));
    return plateRequest;
  };


  return (
    <PlateContext.Provider value={{ updateRequest, plateRequest }}>
      {children}
    </PlateContext.Provider>
  );
};
