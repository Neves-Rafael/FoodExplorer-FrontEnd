import { Container } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FoodExplorer } from "../../components/FoodExplorer";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { sessionsLogin } = useAuth();
  function handleSessionsLogin(){
    sessionsLogin({ email, password})
  }

  return (
    <Container>
      <div className="desktop-logo">
        <FoodExplorer />
      </div>

      <div className="container-login">
        <FoodExplorer />
        <p className="desktop-text">Faça Login</p>
        <div>
          <p>Email</p>
          <Input 
            placeholder="Exemplo: exemplo@exemplo.com"
            type="email" 
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <p>Senha</p>
          <Input
            placeholder="Digite sua Senha!"
            type="password"
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <Button title="Entrar" onClick={handleSessionsLogin}></Button>
        <p>Criar uma conta</p>
      </div>
    </Container>
  );
}
