import { Container } from "./style";
import { IoMdClose } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

export function TagItem({ $isNew, value, onClick, ...rest }) {
  return (
    <Container $isNew={$isNew}>
      <input type="text" value={value} readOnly={!$isNew} {...rest} />
      <button onClick={onClick} type="button">
        {$isNew ? <IoMdClose /> : <FiPlus />}
      </button>
    </Container>
  );
}
