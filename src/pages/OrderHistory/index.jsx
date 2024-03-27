import { Container, MobileContent, DesktopContent } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { api } from "../../service/api";
import { useEffect, useState } from "react";


export function OrderHistory(){
  const [historyOrder, setHistoryOrder] = useState([]);

  useEffect(()=> {
    async function searchMyOrders(){
      const myOrder = await api.get("/payment");
      setHistoryOrder(myOrder.data);
      console.log(myOrder.data[0].id)
    }

    searchMyOrders();
  },[])

  return(
    <Container>
      <Header/>
      <main>
        <h2>Pedidos</h2>
        <MobileContent>
          {historyOrder && historyOrder.map((order)=> (<div className="request-content">
            <div className="data-info">
              <p>{order.id}</p>
              <p>Pendente</p>
              <p>20/05 às 18h00</p>
            </div>
            <p className="plate-info">
              1x salada Radish
            </p>
          </div>))}
        </MobileContent>
        <DesktopContent>

        </DesktopContent>
      </main>
      <Footer/>
    </Container>
  )
}