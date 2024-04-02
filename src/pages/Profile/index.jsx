import { Container, ProfileContent, FormContainer } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Form } from "../../components/Forms";
import { useState } from "react";

import Lottie2 from 'react-lottie';
import animationData from "../../assets/person-animate.json";

export function Profile(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return(
    <Container>
      <Header/>
      <main>
        <ProfileContent>
          <div className="avatar-animate">
            <Lottie2 options={defaultOptions}/>
          </div>
          <div>
            <p>Bem vindo Rafael</p>
            <p>Bem vindo Rafael</p>
            <p>Bem vindo Rafael</p>
          </div>
        </ProfileContent>
        <FormContainer>
          <Form
            value={email}
            label={"Atualizar Nome"}
            placeholder="Exemplo: teste@exemplo.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form
            label={"Atualizar Email"}
            placeholder="No mínimo 6 caracteres"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form
            value={email}
            label={"Nova Senha"}
            placeholder="Exemplo: teste@exemplo.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form
            label={"Confirmar Senha"}
            placeholder="No mínimo 6 caracteres"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="button-container">
            <Button title={"Atualizar"}/>
            <Button title={"Voltar"}/>
            <Button title={"Recuperar senha"}/>
          </div>
        </FormContainer>
      </main>
      <Footer/>
    </Container>
  )
}