import { Container } from "./style";
import { FaRegHeart } from "react-icons/fa";
// import { /*FaHeart,*/ FaPlus, FaMinus } from "react-icons/fa6";
import tempImage from "../../assets/pngegg 1.png";
import { Button } from "../Button";
import { Count } from "../Count";

export function Card({ title, value, plateImage, ...rest }) {
  return (
    <Container {...rest}>
      <FaRegHeart className="favorite" />

      <img src={plateImage} alt="" />
      <p>{title}</p>
      <p className="value">R$ {value}</p>

      <Count />
      <Button title={"Incluir"} />
    </Container>
  );
}
