import { Container, Logo, Section, MakeLogin, MakeAccount } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FoodExplorer } from "../../components/FoodExplorer";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { sessionLogin } = useAuth();

  function handleSessionLogin() {
    sessionLogin({ email, password });
  }

  return (
    <Container>
      <Logo>
        <FoodExplorer />
      </Logo>

      <Section>
        <FoodExplorer />

        <MakeLogin>Faça Login</MakeLogin>

        <div>
          <p>Email</p>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <p>Senha</p>
          <Input
            placeholder="Digite sua Senha!"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button title="Entrar" onClick={handleSessionLogin}></Button>

        <MakeAccount onClick={() => navigate("/signUp")}>
          Criar uma conta
        </MakeAccount>
      </Section>
    </Container>
  );
}
