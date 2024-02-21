import { Container } from "./style";
import { FaRegHeart } from "react-icons/fa";

import { Button } from "../Button";
import { Count } from "../Count";

export function Card({ title, value, plateImage, view, ...rest }) {
  return (
    <Container {...rest}>
      <FaRegHeart className="favorite" />

      <img src={plateImage && plateImage} alt="" onClick={view} />
      <p onClick={view}>{title}</p>
      <p className="value">R$ {value}</p>

      <Count />
      <Button title={"Incluir"} />
    </Container>
  );
}
