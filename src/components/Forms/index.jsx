import { Input } from "../Input";
import { Container } from "./style";

export function Form({ placeholder, onChange, label, ...rest }) {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <Input
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
        id={label}
      />
    </Container>
  );
}
