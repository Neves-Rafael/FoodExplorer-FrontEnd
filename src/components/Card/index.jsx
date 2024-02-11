import { Container } from "./style";
import { FaRegHeart } from "react-icons/fa";
// import { /*FaHeart,*/ FaPlus, FaMinus } from "react-icons/fa6";
import tempImage from "../../assets/pngegg 1.png";
import { Button } from "../Button";
import { Count } from "../Count";

export function Card() {
  return (
    <Container>
      <FaRegHeart className="favorite" />

      <img src={tempImage} alt="" />
      <p>Salada Ravanello</p>
      <p className="value">R$ 49,99</p>

      <Count />
      <Button title={"Incluir"} />
    </Container>
  );
}
