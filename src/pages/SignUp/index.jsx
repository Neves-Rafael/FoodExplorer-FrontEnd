import { Container } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FoodExplorer } from "../../components/FoodExplorer";
import { useState } from "react";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    if (password !== confirmPassword) {
      return alert("As senhas não são iguais!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate(-1);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else alert("Não foi possível cadastrar!");
      });
  }

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
          <Input
            placeholder="Digite seu nome"
            type="email"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div>
          <p>Confirme a Senha</p>
          <Input
            placeholder="Digite sua Senha!"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Button title="Criar Conta" onClick={handleSignUp} />
        <p>Já possui uma conta?</p>
      </div>
    </Container>
  );
}
