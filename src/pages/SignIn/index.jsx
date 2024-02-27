import { Form } from "../../components/Forms"
import { Button } from "../../components/Button";
import { FoodExplorer } from "../../components/FoodExplorer";
import { Container, Logo, Section, MakeLogin, MakeAccount } from "./style";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import login from "../../assets/Hamburger-rafiki.svg";

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
        <img src={login} alt="Uma mulher alegre comendo donuts com cobertura e recheio" />
      </Logo>

      <Section>
        <MakeLogin>Faça Login</MakeLogin> 
        <FoodExplorer className="logo"/>

        <div className="loginForm">
          <Form
            label={"Email"}
            placeholder="Exemplo: teste@exemplo.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form
            label={"Senha"}
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        
          <Button title="Entrar" onClick={handleSessionLogin}/>
        </div>

        <MakeAccount onClick={() => navigate("/signUp")}>Criar uma conta</MakeAccount>
      </Section>
    </Container>
  );
}
