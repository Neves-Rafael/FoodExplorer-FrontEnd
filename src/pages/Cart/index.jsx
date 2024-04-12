import { toast } from "react-toastify";
import { api } from "../../service/api";
import { Tag } from "../../components/Tag";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { Modal } from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Container, RequestList, Options } from "./style";

export function Cart() {
  const [plateRequest, setPlateRequest] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const imageURL = `${api.defaults.baseURL}/files/`;
  const [plateSum, setPlateSum] = useState("");
  const { createPayment } = useAuth();

  const navigate = useNavigate();

  function totalSum() {
    const orders = JSON.parse(localStorage.getItem("pedidos")) || null;

    if (!orders) {
      return;
    }

    setPlateRequest(orders);

    let somaTotal = 0;

    for (const plate of orders) {
      somaTotal += Number(plate.price.replace(",", "."));
    }

    setPlateSum(somaTotal.toFixed(2).replace(".", ","));
  }

  function removePlateList(item) {
    const filterPLate = plateRequest.filter((plate) => {
      if (plate !== item) {
        return plate;
      }
    });

    localStorage.setItem("pedidos", JSON.stringify(filterPLate));

    totalSum();
  }

  const handleModalIsOpen = (state) => {
    setModalIsOpen(state);
  };

  function handleClearRequest() {
    localStorage.setItem("pedidos", JSON.stringify([]));
    totalSum();
    localStorage.removeItem("pedidos");
  }

  async function handleRequestPayment() {
    setModalIsOpen(false);
    const requestPlate = JSON.parse(localStorage.getItem("pedidos"));

    if (!requestPlate) {
      toast.dark(
        "Nenhum pedido Registrado, verifique seu carrinho e tente novamente!"
      );
      return;
    }

    const idPayment = await createPayment({
      requestPlate,
      plateSum: plateSum,
    });

    navigate(`/payment/${idPayment}`);
    localStorage.removeItem("pedidos");
  }

  useEffect(() => {
    totalSum();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <h2>Meus Pedidos</h2>

        <RequestList>
          {plateRequest.length > 0 && plateRequest ? (
            plateRequest.map((item, index) => (
              <div className="plate-content" key={index}>
                <img src={`${imageURL}/${String(item.plate.image)}`} alt="" />
                <div className="plate-info">
                  <div>
                    <p>{`${item.quantity} x ${item.plate.name}`}</p>
                    <div className="tags-plate">
                      {item.plate.ingredients.map((ingredient, index) => (
                        <Tag title={ingredient.name} key={index} />
                      ))}
                    </div>
                    <p>{`R$ ${item.price}`}</p>
                  </div>
                  <button
                    className="delete-plate-request"
                    onClick={() => removePlateList(item)}>
                    Excluir
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="plate-content">
              <p>Nenhum Pedido Registrado</p>
            </div>
          )}
        </RequestList>

        <h3>{`Total R$ ${plateSum || "00,00"}`}</h3>

        <Options>
          <Button title={"Voltar ao cardápio"} onClick={() => navigate("/")} />
          <Button title={"Excluir pedidos"} onClick={handleClearRequest} />
          <Button title={"Pagamento"} onClick={() => setModalIsOpen(true)} />
        </Options>
      </main>
      <Footer />
      {modalIsOpen && (
        <Modal
          message={"Deseja confirmar pedido e seguir para Pagamento?"}
          modalState={handleModalIsOpen}
          onClick={handleRequestPayment}
        />
      )}
    </Container>
  );
}
