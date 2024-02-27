import { Container } from "./style";
import { Input } from "../Input";

export function Form({ placeholder, onChange, label , ...rest}){
  return (
    <Container>
      <label >{label}</label>
      <Input onChange={onChange} placeholder={placeholder} {...rest} />
    </Container>
  )
}