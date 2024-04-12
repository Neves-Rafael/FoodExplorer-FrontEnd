import { toast } from "react-toastify";
import { api } from "../../service/api";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Select } from "../../components/Select";
import { Container, MobileContent, DesktopContent } from "./style";

export function OrderHistory() {
  const [historyOrder, setHistoryOrder] = useState([]);
  const navigate = useNavigate();
  const { user, updateOrderHistory } = useAuth();
  const verifyAdminRole = user.role === USER_ROLE.ADMIN;
  const [updateStatusOrder, setUpdateStatusOrder] = useState("");
  const [idOrderToUpdate, setIdOderToUpdate] = useState(0);

  function updateTimeToBrazil(timer) {
    let setData = new Date(timer);

    let day = setData.getDate();
    let month = setData.getDate();
    let hours = setData.getHours() - 3; //GMT-3 Brasília;
    let minutes = setData.getMinutes();

    function verifyFormat() {
      if (hours < 0) {
        hours += 24;
        day--;
      }

      if (hours > 24) {
        hours -= 24;
        day++;
      }

      hours < 10 ? (hours = "0" + hours) : hours;
      minutes < 10 ? (minutes = "0" + minutes) : minutes;
      day < 10 ? (day = "0" + day) : day;
      month < 10 ? (month = "0" + month) : month;
    }
    verifyFormat();

    return `${day}/${month} às ${hours}h${minutes}`;
  }

  const verifyStatusOrder = (status) => {
    let colorStatus = "";
    switch (status) {
      case "cancelado":
        colorStatus = "red";
        break;
      case "processando":
        colorStatus = "light-blue";
        break;
      case "finalizado":
        colorStatus = "green";
        break;
      case "pendente":
        colorStatus = "orange";
        break;
      case "cozinha":
        colorStatus = "blue";
        break;
    }

    return colorStatus;
  };

  const handleStatusOrder = async (statusUpdate) => {
    toast.dark("Pedido atualizado.");
    setUpdateStatusOrder(statusUpdate);
    await updateOrderHistory({ id: idOrderToUpdate, newStatus: statusUpdate });
  };

  useEffect(() => {
    if (updateStatusOrder && verifyAdminRole) {
    }
  }, [updateStatusOrder]);

  useEffect(() => {
    async function searchMyOrders() {
      if (verifyAdminRole) {
        const adminOrder = await api.get("/payment");
        setHistoryOrder(adminOrder.data);
      } else {
        const userOrder = await api.get("/payment");
        setHistoryOrder(userOrder.data);
      }
    }

    searchMyOrders();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <div className="text-content">
          <button className="back-button" onClick={() => navigate(-1)}>
            {<FaArrowLeft size={20} />} Voltar
          </button>
          <h2>Histórico de Pedidos</h2>
        </div>
        <MobileContent>
          {historyOrder.length > 0 &&
            historyOrder.map((order, index) => (
              <div
                className="request-content"
                key={index}
                onClick={() =>
                  verifyAdminRole ? null : navigate(`/payment/${order.id}`)
                }>
                <div className="data-info">
                  <p>Nº {order.id}</p>
                  {!verifyAdminRole && (
                    <p className="color-status">
                      {<span className={verifyStatusOrder(order.status)} />}
                      {order.status}
                    </p>
                  )}
                  <p>{updateTimeToBrazil(order.updated_at)}</p>
                </div>

                <div className="plate-info">
                  {order.plates.length > 0 &&
                    JSON.parse(order.plates).map((plate, index) => (
                      <p key={index}>
                        {`${plate.quantity} x`} {plate.plate.name}
                      </p>
                    ))}
                </div>

                {verifyAdminRole && (
                  <div onClick={() => setIdOderToUpdate(order.id)}>
                    <Select
                      handleCategory={handleStatusOrder}
                      itemOption={[
                        "cancelado",
                        "pendente",
                        "finalizado",
                        "cozinha",
                        "processando",
                      ]}
                      placeholder={
                        <>
                          {<span className={verifyStatusOrder(order.status)} />}
                          {order.status}
                        </>
                      }
                    />
                  </div>
                )}
              </div>
            ))}
        </MobileContent>
        <DesktopContent>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>Status</th>
                  <th>Código </th>
                  <th>Detalhe do pedido</th>
                  <th>Data e hora</th>
                </tr>
                {historyOrder &&
                  historyOrder.map((order, index) => (
                    <tr
                      className="each-payment"
                      key={index}
                      onClick={() =>
                        verifyAdminRole
                          ? null
                          : navigate(`/payment/${order.id}`)
                      }>
                      <td className="status-payment">
                        {!verifyAdminRole ? (
                          <>
                            <p className="user-status">
                              <span
                                className={verifyStatusOrder(order.status)}
                              />
                              {order.status}
                            </p>
                          </>
                        ) : (
                          <div onClick={() => setIdOderToUpdate(order.id)}>
                            <Select
                              handleCategory={handleStatusOrder}
                              itemOption={[
                                "cancelado",
                                "pendente",
                                "finalizado",
                                "cozinha",
                                "processando",
                              ]}
                              placeholder={
                                <>
                                  {
                                    <span
                                      className={verifyStatusOrder(
                                        order.status
                                      )}
                                    />
                                  }
                                  {order.status}
                                </>
                              }
                            />
                          </div>
                        )}
                      </td>
                      <td>{order.id < 10 ? `0${order.id}` : order.id}</td>
                      <td className="all-plates">
                        {JSON.parse(order.plates).map((plate, index) => (
                          <p key={index}>
                            {`${plate.quantity} x`} {plate.plate.name}
                          </p>
                        ))}
                      </td>
                      <td>{updateTimeToBrazil(order.updated_at)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </DesktopContent>
      </main>
      <Footer />
    </Container>
  );
}
