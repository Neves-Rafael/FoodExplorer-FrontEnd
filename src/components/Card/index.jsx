import { useState } from "react";
import { Count } from "../Count";
import { Button } from "../Button";
import { Container } from "./style";
import { FaRegHeart } from "react-icons/fa";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { USER_ROLE } from "../../utils/roles"
import { useAuth } from "../../hooks/auth";

import { useContext } from "react";
import { PlateContext } from "../../hooks/plateRequest";

export function Card({ onCountChange, plateImage, view, plate, ...rest }) {
  const [countValue, setCountValue] = useState(1);
  const { user } = useAuth();

  const verifyAdminRole = user.role === USER_ROLE.ADMIN;

  const { updateRequest } = useContext(PlateContext);

  const handleCountChange = (newValue) => {
    setCountValue(newValue);
  };

  function calculate() {
    updateRequest();
    // localStorage.removeItem("pedidos");
    const price = value * countValue;
    const allRequest = JSON.parse(localStorage.getItem("pedidos")) || [];

    const newRequest = {
      plate,
      price,
    };

    allRequest.push(newRequest);
    localStorage.setItem("pedidos", JSON.stringify(allRequest));
  }

  return (
    <Container {...rest}>
     { verifyAdminRole 
     ? <FaRegEdit size={30} className="favorite-edit" /> 
     : <FaRegHeart className="favorite-edit" /> }

      <img src={plateImage && plateImage} alt="" onClick={view} />
      <p className="plate-name" onClick={view}>{plate.name} <TbArrowBadgeRightFilled size={18} /></p>
      <p className="plate-description">{plate.description}</p>
      <p className="value">R$ {plate.value}</p>

      {verifyAdminRole ? null : <div className="plate-count">
        <Count onCountChange={handleCountChange} />
        <Button title={"Incluir"} onClick={calculate} />
      </div>}
    </Container>
  );
}
