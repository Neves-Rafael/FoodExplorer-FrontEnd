import { Container } from "./style";
import { FaRegHeart } from "react-icons/fa";

import { Button } from "../Button";
import { Count } from "../Count";

export function Card({ title, value, plateImage, ...rest }) {
  console.log(title, value, plateImage);
  return (
    <Container {...rest}>
      <FaRegHeart className="favorite" />

      <img src={plateImage && plateImage} alt="" />
      <p>{title}</p>
      <p className="value">R$ {value}</p>

      <Count />
      <Button title={"Incluir"} />
    </Container>
  );
}
