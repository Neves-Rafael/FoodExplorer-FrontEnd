import { useAuth } from "../../hooks/auth";
import { Form } from "../../components/Forms";
import { Button } from "../../components/Button";
import { FoodExplorer } from "../../components/FoodExplorer";
import { Container, Logo, Section, MakeLogin, MakeAccount } from "./style";
import { toast } from "react-toastify";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Lottie3 from "react-lottie";
import animationData from "../../assets/food-animate.json";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createAccount } = useAuth();

  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  async function handleSignUp() {
    if (name.length < 3 || email.length < 6) {
      toast.dark("Preencha os campos com informações válidas.");
      return;
    }

    if (password.length < 6) {
      toast.dark("Senha inválida, verifique e tente novamente.");
      return;
    }

    const create = await createAccount({ name, email, password });
    if (create) navigate(-1);
  }

  return (
    <Container>
      <Logo>
        <FoodExplorer />
        <Lottie3 options={defaultOptions} />
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
          <Button title="Criar Conta" onClick={handleSignUp} />
        </div>

        <MakeAccount onClick={() => navigate(-1)}>
          {" "}
          Já possui uma conta?{" "}
        </MakeAccount>
      </Section>
    </Container>
  );
}
