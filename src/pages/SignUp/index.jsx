import { Container } from "./style";
import { Input } from "../components/Inputs";
import { Button } from "../components/Button";

export function SignUp() {
  return (
    <Container>
      <Input placeholder="Exemplo: exemplo@exemplo.com" type="email" />
      <Input placeholder="Digite sua Senha!" type="password" />
      <Button title="Entrar"></Button>
    </Container>
  );
}
