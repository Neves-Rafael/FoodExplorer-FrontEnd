import { Container, Logo, Section, MakeLogin, MakeAccount } from "./style";
import { Form } from "../../components/Forms";
import { Button } from "../../components/Button";
import { FoodExplorer } from "../../components/FoodExplorer";
import login from "../../assets/Hamburger-rafiki.svg";
import { api } from "../../service/api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate(-1);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else alert("Não foi possível cadastrar!");
      }
    );
  }

  return (
    <Container>
      <Logo>
        <FoodExplorer />
        <img src={login} alt="Uma mulher alegre comendo donuts com cobertura e recheio" />
      </Logo>

      <Section>
        <FoodExplorer />
        <MakeLogin>Crie Sua Conta</MakeLogin>

        <div className="loginForm">
          <Form
            label={"Nome"}
            placeholder="Digite seu nome"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />

          <Form
            label={"Email"}
            placeholder="Exemplo: teste@exemplo.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form
            label={"Senha"}
            placeholder="Digite sua senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Criar Conta" onClick={handleSignUp}/>
        </div>

        <MakeAccount onClick={() => navigate(-1)}> Já possui uma conta? </MakeAccount>
      </Section>
    </Container>
  );
};
