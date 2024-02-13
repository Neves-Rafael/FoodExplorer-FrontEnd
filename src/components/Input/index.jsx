import { Container } from "./style";
// eslint-disable-next-line react/prop-types
export function Input({ placeholder, icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={32} />}
      <input placeholder={placeholder} {...rest} />
    </Container>
  );
}