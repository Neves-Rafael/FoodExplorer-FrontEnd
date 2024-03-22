import { Container, RequestList, StatusPayment, CreditPayment } from "./style";
import { PlateContext } from "../../hooks/plateRequest";
import { useContext, useState} from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import imageTeste from "../../assets/group-11.png"
import { Form } from "../../components/Forms"
import { Button } from "../../components/Button";
import { PiReceipt } from "react-icons/pi";
import { ButtonText } from "../../components/ButtonText"
import { RiArrowLeftSLine } from "react-icons/ri";

import { FaPix } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { IoCopy } from "react-icons/io5";

export function Payment(){
  const { plateRequest } = useContext(PlateContext);
  const [methodSelect, setMethodSelect] = useState("pix");
  const [availablePayment, setAvailablePayment] = useState("disable");


  return(
    <Container>
      <Header/>

      <div className="payment-container">
        <RequestList $isenable={availablePayment}>
          <h2>Meus Pedidos</h2>

          {plateRequest 
          ? <div className="plate-content">
            <img src={imageTeste} alt="" />
            <div className="plate-info">
                <div>
                  <p>1 x</p>
                  <p>Salada Radish</p>
                  <p>R$ 25,99</p>
                </div>
                <button>Excluir</button>
              </div>
            </div> 
          : <div className="plate-content">
              <p>Nenhum Pedido Registrado</p>
            </div>}

          <h3>Total: R$ 103,00</h3>
          <Button title={"Avançar"} onClick={() => setAvailablePayment("enable")}   />
        </RequestList>

        <StatusPayment $isenable={availablePayment}>
          <ButtonText title={"Voltar"} onClick={() => setAvailablePayment("disable")} icon={RiArrowLeftSLine}/>
          <h2>Pagamento</h2>
          <div className="select-payment">
            <div>
              <button 
              onClick={() => setMethodSelect("pix") } 
              className={methodSelect === "pix" ? "method-select" : null}>
                {<FaPix size={32}/>} PIX
              </button>
              
              <button 
              onClick={() => setMethodSelect("credit")} 
              className={methodSelect === "credit" ? "method-select" : null}>
                {<IoWalletOutline size={32}/>} Crédito
              </button>
            </div>

            { methodSelect === "pix" ?
             <>
              <img src="https://images.unsplash.com/photo-1550482768-88b710a445fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

              <p>Copiar Código {<IoCopy />}</p>
             </>
            :
            <CreditPayment>
              <Form label="Número do Cartão" onChange={(e) => e.target.value} placeholder={"0000 0000 0000 0000"}/>
              <div>
                <Form label="Validade" onChange={(e) => e.target.value} placeholder={"04/25"}/>
                <Form label="CVC" onChange={(e) => e.target.value} placeholder={"000"}/>
              </div>
              <Button title="Finalizar pagamento" icon={PiReceipt} id="finish-payment"/>
            </CreditPayment> }

          </div>
        </StatusPayment>
      </div>
      <Footer/>
    </Container>
  )
};