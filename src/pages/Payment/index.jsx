import { toast } from "react-toastify";
import { api } from "../../service/api";
import { useEffect, useState } from "react";
import { Form } from "../../components/Forms";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate, useParams } from "react-router-dom";
import { Container, RequestList, StatusPayment, CreditPayment } from "./style";

import { FaPix } from "react-icons/fa6";
import { LuTimer } from "react-icons/lu";
import { AiOutlineStop } from "react-icons/ai";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoWalletOutline, IoCopy } from "react-icons/io5";
import { PiReceipt, PiForkKnifeBold, PiCookingPot } from "react-icons/pi";

export function Payment() {
  const [methodSelect, setMethodSelect] = useState("pix");
  const [availablePayment, setAvailablePayment] = useState("disable");
  const imageURL = `${api.defaults.baseURL}/files/`;
  const [plateRequest, setPlateRequest] = useState([]);
  const [resultStatus, setResultStatus] = useState({});
  const [cardNumber, setCardNumber] = useState("");
  const [cardValidate, setCardValidate] = useState("");
  const [cvc, setCvc] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  const paymentStatus = [
    {
      status: "cancelado",
      message: "Pedido cancelado",
      image: AiOutlineStop,
    },
    {
      status: "finalizado",
      message: "Pedido entregue",
      image: PiForkKnifeBold,
    },
    {
      status: "processando",
      message: "Processando o pedido",
      image: LuTimer,
    },
    {
      status: "cozinha",
      message: "Seu pedido está sendo preparado",
      image: PiCookingPot,
    },
  ];

  function redirectToPayment() {
    const path = "https://foodexplorer-delivery.netlify.app"
    
    window.open(
      `${path}/payment/qrcode/${id}`,
      "_blank"
    );
    updateStatusPayment();
  }

  async function updateStatusPayment() {
    let refreshTime = 0;

    while (refreshTime < 4) {
      refreshTime++;

      setTimeout(async () => {
        const paymentResult = await api.get(`payment/${id}`);

        paymentStatus.map((status) => {
          if (status.status === paymentResult.data.status) {
            setResultStatus(status);
            return;
          }
        });
      }, 1000 * 10 * (refreshTime + 1)); //10 segundos
    }
  }

  function handleCardPayment() {
    if (cardNumber.length < 12 || cardValidate.length < 4 || cvc.length < 3) {
      toast.dark("Dados do cartão inválido.");
      return;
    }
    redirectToPayment();
    setCardNumber("");
    setCardValidate("");
    setCvc("");
  }

  useEffect(() => {
    async function searchPayment() {
      const paymentResult = await api.get(`payment/${id}`);
      setPlateRequest(JSON.parse(paymentResult.data.plates));
      setPrice(paymentResult.data.price);

      paymentStatus.map((status) => {
        if (paymentResult.data.status === "pendente") {
          setResultStatus("");
          return;
        }

        if (status.status === paymentResult.data.status) {
          setResultStatus(status);
          return;
        }
      });

      if (
        paymentResult.data.status !== "cancelado" &&
        paymentResult.data.status !== "pendente"
      ) {
        updateStatusPayment();
      }
    }

    searchPayment();
  }, []);

  return (
    <Container>
      <Header />

      <div className="payment-container">
        <RequestList $isenable={availablePayment}>
          <h2>Meus Pedidos</h2>

          <main>
            {plateRequest.length > 0 && plateRequest ? (
              plateRequest.map((item, index) => (
                <div className="plate-content" key={index}>
                  <img src={`${imageURL}/${String(item.plate.image)}`} alt="" />
                  <div className="plate-info">
                    <div>
                      <p>{`${item.quantity} x`}</p>
                      <p>{item.plate.name}</p>
                    </div>
                    <p className="price">{`R$ ${item.price}`}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="plate-content">
                <p>Nenhum Pedido Registrado</p>
              </div>
            )}
          </main>

          <h3>{`Total R$ ${price || "00,00"}`}</h3>
          <Button
            title={"Avançar"}
            onClick={() => setAvailablePayment("enable")}
            className="mobile-payment"
          />
        </RequestList>

        <StatusPayment $isenable={availablePayment}>
          <ButtonText
            title={"Voltar"}
            onClick={() => setAvailablePayment("disable")}
            icon={RiArrowLeftSLine}
          />
          <h2>Pagamento</h2>
          <div className="select-payment">
            <div>
              <button
                onClick={() => setMethodSelect("pix")}
                className={methodSelect === "pix" ? "method-select" : null}>
                {<FaPix size={32} />} PIX
              </button>

              <button
                onClick={() => setMethodSelect("credit")}
                className={methodSelect === "credit" ? "method-select" : null}>
                {<IoWalletOutline size={32} />} Crédito
              </button>
            </div>

            {resultStatus.status ? (
              <>
                <div className="status-container">
                  <resultStatus.image size={160} />
                  <p>{resultStatus.message}</p>
                </div>
              </>
            ) : (
              <>
                {methodSelect === "pix" ? (
                  <>
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${api.defaults.baseURL}/payment/qrcode/${id}`}
                    />

                    <p onClick={redirectToPayment}>Acessar link {<IoCopy />}</p>
                  </>
                ) : (
                  <CreditPayment>
                    <Form
                      label="Número do Cartão"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder={"0000 0000 0000 0000"}
                    />
                    <div>
                      <Form
                        value={cardValidate}
                        label="Validade"
                        onChange={(e) => setCardValidate(e.target.value)}
                        placeholder={"04/25"}
                      />
                      <Form
                        value={cvc}
                        label="CVC"
                        onChange={(e) => setCvc(e.target.value)}
                        placeholder={"000"}
                      />
                    </div>
                    <Button
                      title="Finalizar pagamento"
                      icon={PiReceipt}
                      id="finish-payment"
                      onClick={handleCardPayment}
                    />
                  </CreditPayment>
                )}
              </>
            )}
          </div>
          <div className="testando">
            <Button title={"Voltar"} onClick={() => navigate(-1)} />
            <Button title={"Novo Pedido"} onClick={() => navigate("/")} />
            <Button
              title={"Ver histórico"}
              onClick={() => navigate("/order-history")}
            />
          </div>
        </StatusPayment>
      </div>
      <Footer />
    </Container>
  );
}
