import { Container } from "./style";

export function ButtonText({ title, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={32} />}
      {title}
    </Container>
  );
}
