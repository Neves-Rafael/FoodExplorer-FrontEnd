import { Container } from "./style";
import { FaRegHeart } from "react-icons/fa";

import { Button } from "../Button";
import { Count } from "../Count";
import { useState } from "react";

import { useContext } from "react";
import { PlateContext } from "../../hooks/plateRequest";

export function Card({
  onCountChange,
  title,
  value,
  plateImage,
  view,
  plate,
  ...rest
}) {
  const [countValue, setCountValue] = useState(1);

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
      <FaRegHeart className="favorite" />

      <img src={plateImage && plateImage} alt="" onClick={view} />
      <p onClick={view}>{title}</p>
      <p className="value">R$ {value}</p>

      <Count onCountChange={handleCountChange} />
      <Button title={"Incluir"} onClick={calculate} />
    </Container>
  );
}
