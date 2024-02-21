import { Container, Fov } from "./style";

export function Section({ title, children }) {
  return (
    <Container>
      <p>{title}</p>
      {children}
      <Fov />
    </Container>
  );
}
