import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { Container } from "./style";

export function Count() {
  return (
    <Container>
      <FiMinusCircle />
      <span>01</span>
      <FiPlusCircle />
    </Container>
  );
}
