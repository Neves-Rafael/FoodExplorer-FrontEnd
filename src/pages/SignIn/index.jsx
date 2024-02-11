import { Container } from "./style";
import { Input } from "../../components/Inputs";
import { Button } from "../../components/Button";
import { FoodExplorer } from "../../components/FoodExplorer";

export function SignIn() {
  return (
    <Container>
      <div>
        <FoodExplorer />
        <div>
          <p>Email</p>
          <Input placeholder="Exemplo: exemplo@exemplo.com" type="email" />
        </div>
        <div>
          <p>Senha</p>
          <Input placeholder="Digite sua Senha!" type="password" />
        </div>
        <Button title="Entrar"></Button>
        <p>Criar uma conta</p>
      </div>
    </Container>
  );
}
