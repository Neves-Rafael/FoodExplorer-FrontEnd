import { Container, MobileContent, DesktopContent } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { api } from "../../service/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonText } from "../../components/ButtonText";
import { FaArrowLeft } from "react-icons/fa6";


export function OrderHistory(){
  const [historyOrder, setHistoryOrder] = useState([]);
  const navigate = useNavigate();

  function updateTimeToBrazil(timer){
    let setData = new Date(timer);

    function addZero(data){
      if(data < 10){
        data = "0" + data;
      }
      return data
    }
    
    const day = addZero(setData.getDate());
    const month = addZero(setData.getDate());
    const hours = addZero(setData.getHours());
    const minutes = addZero(setData.getMinutes());

    return `${day}/${month} às ${hours}h${minutes}`

  }

  useEffect(()=> {
    async function searchMyOrders(){
      const myOrder = await api.get("/payment");
      setHistoryOrder(myOrder.data);
      const daleee = JSON.parse(myOrder.data[5].plates);
      console.log(daleee[1].quantity)
      console.log(daleee[1].plate.name)
    }

    searchMyOrders();
  },[])

  return(
    <Container>
      <Header/>
      <main>
        <button onClick={()=> navigate(-1)}>{<FaArrowLeft size={24}/>} Voltar</button>
        <h2>Histórico de Pedidos</h2>
        <MobileContent>
          {historyOrder && historyOrder.map((order, index)=> (
          <div className="request-content" key={index} onClick={() => navigate(`/payment/${order.id}`)}>
            <div className="data-info">
              <p>Nº {order.id}</p>
              <p className="color-status">
                {order.status === "pendente" && <span className="orange"/>}
                {order.status === "finalizado" && <span className="green"/>}
                {order.status === "cozinha" && <span className="blue"/>}
                {order.status === "em andamento" && <span className="light-blue"/>}
                {order.status === "cancelado" && <span className="red"/>}
                {order.status}
              </p>
              <p>{updateTimeToBrazil(order.updated_at)}</p>
            </div>
            <div className="plate-info">
              {JSON.parse(order.plates).map((plate, index)=>(
                <p key={index}>
                  {`${plate.quantity} x`} {plate.plate.name}  
                </p>
              ))}
            </div>
          </div>))}
        </MobileContent>
        <DesktopContent>
        {historyOrder && historyOrder.map((order, index)=> (
          <div className="request-content" key={index} onClick={() => navigate(`/payment/${order.id}`)}>
            <div className="data-info">
              <p>Nº {order.id}</p>
              <p className="color-status">
                {order.status === "pendente" && <span className="orange"/>}
                {order.status === "finalizado" && <span className="green"/>}
                {order.status === "cozinha" && <span className="blue"/>}
                {order.status === "em andamento" && <span className="light-blue"/>}
                {order.status === "cancelado" && <span className="red"/>}
                {order.status}
              </p>
              <p>{updateTimeToBrazil(order.updated_at)}</p>
            </div>
            <div className="plate-info">
              {JSON.parse(order.plates).map((plate, index)=>(
                <p key={index}>
                  {`${plate.quantity} x`} {plate.plate.name}  
                </p>
              ))}
            </div>
          </div>))}
        </DesktopContent>
      </main>
      <Footer/>
    </Container>
  )
}