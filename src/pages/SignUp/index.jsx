import { Container } from "./style";
import { Input } from "../components/Inputs";

export function SignUp() {
  return (
    <Container>
      <Input placeholder="Digite sua Senha!" type="password" />
    </Container>
  );
}
