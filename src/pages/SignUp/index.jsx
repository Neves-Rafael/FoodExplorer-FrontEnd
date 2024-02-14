import { Container } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FoodExplorer } from "../../components/FoodExplorer";

export function SignUp() {
  return (
    <Container>
      <div className="desktop-logo">
        <FoodExplorer />
      </div>

      <div className="container-login">
        <FoodExplorer />
        <p className="desktop-text">Crie Sua Conta</p>
        <div>
          <p>Nome</p>
          <Input placeholder="Digite seu nome" type="email" />
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
        <Button title="Criar Conta"></Button>
        <p>Já possui uma conta?</p>
      </div>
    </Container>
  );
}
