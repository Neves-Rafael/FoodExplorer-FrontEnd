import { Container } from "./style";
export function Input({ placeholder, icon: Icon, onChange, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={32} />}
      <input placeholder={placeholder} onChange={onChange} />
    </Container>
  );
}
