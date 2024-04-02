import { Container, ProfileContent, FormContainer } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Form } from "../../components/Forms";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";

import Lottie2 from 'react-lottie';
import animationData from "../../assets/person-animate.json";

export function Profile(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [isEnable, setIsEnable] = useState(false);
  const { updateAccount } = useAuth();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  function handleUpdateProfile(){
    updateAccount({name, email, newPassword, oldPassword});
  }

  useEffect(()=> {
    if(name || email || newPassword || oldPassword){
      setIsEnable(true)
      return
    }
    setIsEnable(false)
  },[name, email, newPassword, oldPassword])

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
        <FormContainer $isEnable={isEnable}>
          <Form
            label={"Atualizar Nome"}
            value={name}
            placeholder="Adicione um nome válido"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <Form
            label={"Atualizar Email"}
            value={email}
            placeholder="Adicione um e-mail válido"
            type="e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form
            label={"Senha Antiga"}
            value={oldPassword}
            placeholder="Confirme sua senha"
            type="password"
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <Form
            label={"Nova Senha"}
            value={newPassword}
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <div className="button-container">
            <Button className="update-button" title={"Atualizar"} onClick={handleUpdateProfile}/>
            <Button title={"Voltar"}/>
            <Button title={"Recuperar senha"}/>
          </div>
        </FormContainer>
      </main>
      <Footer/>
    </Container>
  )
}