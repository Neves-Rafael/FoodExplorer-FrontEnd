import { Container, Logo, Section, MakeLogin, MakeAccount } from "./style";
import { Form } from "../../components/Forms";
import { Button } from "../../components/Button";
import { FoodExplorer } from "../../components/FoodExplorer";
import login from "../../assets/Hamburger-rafiki.svg";
import { api } from "../../service/api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return toast.dark("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        toast.dark("Usuário cadastrado com sucesso!");
        navigate(-1);
      })
      .catch((error) => {
        if (error.response) {
          toast.dark(error.response.data.message);
        } else toast("Não foi possível cadastrar!");
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Form
            label={"Email"}
            placeholder="Exemplo: teste@exemplo.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <Form
            label={"Senha"}
            placeholder="Digite sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Criar Conta" onClick={handleSignUp}/>
        </div>

        <MakeAccount onClick={() => navigate(-1)}> Já possui uma conta? </MakeAccount>
      </Section>
    </Container>
  );
};
