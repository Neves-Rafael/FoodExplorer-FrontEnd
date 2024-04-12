import { Container } from "./style";
import { FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export function TagItem({ $isNew, value, onClick, ...rest }) {
  return (
    <Container $isNew={$isNew}>
      <input type="text" value={value} readOnly={!$isNew} {...rest} />
      <button onClick={onClick} type="button">
        {$isNew ? <FiPlus /> : <IoMdClose />}
      </button>
    </Container>
  );
}
