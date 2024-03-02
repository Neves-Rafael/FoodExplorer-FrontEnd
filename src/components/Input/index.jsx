import { Container } from "./style";
export function Input({ placeholder, icon: Icon, onChange, value, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={32} />}
      <input placeholder={placeholder} onChange={onChange} defaultValue={value} {...rest}/>
    </Container>
  );
}
