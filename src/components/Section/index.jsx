/* eslint-disable react/prop-types */
import { Container } from "./style";

export function Section({ title, children }) {
  return (
    <Container>
      <p>{title}</p>
      <div className="cardScroll">{children}</div>
    </Container>
  );
}
