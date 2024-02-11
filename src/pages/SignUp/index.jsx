import { Container } from "./style";
import { Input } from "../../components/Inputs";
import { Button } from "../../components/Button";
import { FoodExplorer } from "../../components/FoodExplorer";

export function SignUp() {
  return (
    <Container>
      <div>
        <FoodExplorer />
        <div>
          <p>Seu Nome</p>
          <Input placeholder="Exemplo: exemplo@exemplo.com" type="Text" />
        </div>
        <div>
          <p>Email</p>
          <Input placeholder="Exemplo: exemplo@exemplo.com" type="email" />
        </div>
        <div>
          <p>Senha</p>
          <Input placeholder="Digite sua Senha!" type="password" />
        </div>
        <div>
          <p>Confirme a Senha</p>
          <Input placeholder="Digite sua Senha!" type="password" />
        </div>
        <Button title="Criar conta"></Button>
        <p>Já tenho uma conta</p>
      </div>
    </Container>
  );
}
