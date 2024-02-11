import { Container } from "./style";
import { FaRegHeart } from "react-icons/fa";
// import { /*FaHeart,*/ FaPlus, FaMinus } from "react-icons/fa6";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import tempImage from "../../assets/pngegg 1.png";
import { Button } from "../Button";

export function Card() {
  return (
    <Container>
      <FaRegHeart className="favorite" />

      <img src={tempImage} alt="" />
      <p>Salada Ravanello</p>
      <p>R$ 49,99</p>
      <div>
        <FiMinusCircle />
        <span>01</span>
        <FiPlusCircle />
      </div>
      <Button title={"Incluir"} />
    </Container>
  );
}
