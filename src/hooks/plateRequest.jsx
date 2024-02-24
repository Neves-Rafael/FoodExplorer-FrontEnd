import { createContext, useState } from "react";

export const PlateContext = createContext();

export const PlateProvider = ({ children }) => {
  const [plateRequest, setPlateRequest] = useState([]);
  const allRequests = JSON.parse(localStorage.getItem("pedidos"));
  console.log(plateRequest);
  const updateRequest = () => {
    setPlateRequest(allRequests);
  };
  return (
    <PlateContext.Provider value={{ plateRequest, updateRequest }}>
      {children}
    </PlateContext.Provider>
  );
};
