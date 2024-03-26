import { Container, RequestList, StatusPayment, CreditPayment } from "./style";
import { useEffect, useState} from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Form } from "../../components/Forms"
import { Button } from "../../components/Button";
import { PiReceipt } from "react-icons/pi";
import { ButtonText } from "../../components/ButtonText"
import { RiArrowLeftSLine } from "react-icons/ri";
import { api } from "../../service/api";
import { useNavigate, useParams } from "react-router-dom";

import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { PiForkKnifeBold } from "react-icons/pi";
import { LuTimer } from "react-icons/lu";

import { FaPix } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { IoCopy } from "react-icons/io5";

export function Payment(){
  const [methodSelect, setMethodSelect] = useState("pix");
  const [availablePayment, setAvailablePayment] = useState("disable");
  const imageURL = `${api.defaults.baseURL}/files/`;
  const [statusPayment, setStatusPayment] = useState({});
  const [plateRequest, setPlateRequest] = useState([]);
  const [price, setPrice] = useState("");
  const { id } = useParams();
  // const navigate = useNavigate();
  

  useEffect(() => {
    async function searchPayment(){
      const paymentResult = await api.get(`payment/${id}`);
      setPlateRequest(JSON.parse(paymentResult.data.plates));
      const totalPrice = paymentResult.data.price;
      setPrice(totalPrice);
    }

    searchPayment();
  }, [])

  return(
    <Container>
      <Header/>

      <div className="payment-container">
        <RequestList $isenable={availablePayment}>
          <h2>Meus Pedidos</h2>

          <main>
            {plateRequest.length > 0 && plateRequest ? plateRequest.map((item, index) => (
            <div className="plate-content" key={index}>
              <img src={`${imageURL}/${String(item.plate.image)}`} alt="" />
              <div className="plate-info">
                <div>
                  <p>{`${item.quantity} x`}</p>
                  <p>{item.plate.name}</p>
                </div>
                <p className="price">{`R$ ${item.price}`}</p>
              </div>
            </div> ))
            : 
            <div className="plate-content">
              <p>Nenhum Pedido Registrado</p>
            </div>}
          </main>

          <h3>{`Total R$ ${price || "00,00"}`}</h3>
          <Button title={"Avançar"} onClick={() => setAvailablePayment("enable")} className="mobile-payment" />
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

            {statusPayment ?
              <>
                <div className="status-container">
                  <IoCheckmarkCircleOutline size={160}/>
                  <p>Pagamento realizado</p>
                </div>
              </>
            :
              <>
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
                  </CreditPayment> 
                }
              </>
            }
          </div>
          <div className="testando">
            <Button title={"Voltar"}/>
            <Button title={"Novo Pedido"}/>
            <Button title={"Ver histórico"}/>
          </div>
        </StatusPayment>
      </div>
      <Footer/>
    </Container>
  )
};