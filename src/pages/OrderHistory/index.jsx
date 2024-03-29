import { Container, MobileContent, DesktopContent } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { api } from "../../service/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonText } from "../../components/ButtonText";
import { FaArrowLeft } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { Select} from "../../components/Select"


export function OrderHistory(){
  const [historyOrder, setHistoryOrder] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();
  const verifyAdminRole = user.role === USER_ROLE.ADMIN;
  const [updateStatusOrder, setUpdateStatusOrder] = useState("")

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

  const verifyStatusOrder = (status) => {
    let colorStatus = "";
    switch(status){
    case 'cancelado':
      colorStatus="red"
      break;
    case 'em andamento':
      colorStatus="light-blue"
      break;
    case 'finalizado':
      colorStatus="green"
      break;
    case 'pendente':
      colorStatus="orange"
      break;
    case 'cozinha':
      colorStatus="blue"
      break;
    }

    return colorStatus;
  }

  const handleStatusOrder = (statusUpdate) => {
    console.log(statusUpdate)
    setUpdateStatusOrder(statusUpdate);
  }

  useEffect(()=> {
    if(updateStatusOrder && verifyAdminRole){
      // console.log(updateStatusOrder)
    }
  },[updateStatusOrder]);

  useEffect(()=> {
    async function searchMyOrders(){

      if(verifyAdminRole){
        const adminOrder = await api.get("/payment");
        setHistoryOrder(adminOrder.data);
      }else{
        const userOrder = await api.get("/payment");
        setHistoryOrder(userOrder.data);
      }
    }

    searchMyOrders();
  },[]);

  return(
    <Container>
      <Header/>
      <main>
        {/* <button onClick={()=> navigate(-1)}>{<FaArrowLeft size={24}/>} Voltar</button> */}
        <h2>Histórico de Pedidos</h2>
        <MobileContent>
          {historyOrder.length > 0 && historyOrder.map((order, index)=> (
            <div className="request-content" key={index} >
              {/* onClick={() => navigate(`/payment/${order.id}`)} */}
              <div className="data-info">
                <p>Nº {order.id}</p>
                {!verifyAdminRole && <p className="color-status">
                  {<span className={verifyStatusOrder(order.status)}/>}
                  {order.status}
                </p>}
                <p>{updateTimeToBrazil(order.updated_at)}</p>
              </div>
              <div className="plate-info">
                {order.plates.length > 0 && JSON.parse(order.plates).map((plate, index)=>(
                  <p key={index}>
                    {`${plate.quantity} x`} {plate.plate.name}  
                  </p>
                ))}
              </div>
              <div>
                <Select
                  handleCategory={handleStatusOrder}
                  itemOption={["cancelado","pendente", "finalizado", "cozinha", "em andamento"]}
                  placeholder={<>
                  {<span className={verifyStatusOrder(order.status)}/>}
                  {order.status}
                  </>}
                />
              </div>
            </div>))}
        </MobileContent>
        {/* <DesktopContent>
          <div className="table-container">
            <table>
              <tbody>
              <tr>
                <th>Status</th>
                <th>Código </th>
                <th>Detalhe do pedido</th>
                <th>Data e hora</th>
              </tr>
              {historyOrder && historyOrder.map((order, index)=> (
                <tr className="each-payment" key={index} onClick={() => navigate(`/payment/${order.id}`)}>
                  <td className="status-payment">
                    {order.status === "pendente" && <span className="orange"><FaCircle size={10}/></span>}
                    {order.status === "finalizado" && <span className="green"><FaCircle size={10}/></span>}
                    {order.status === "cozinha" && <span className="blue"><FaCircle size={10}/></span>}
                    {order.status === "em andamento" && <span className="light-blue"><FaCircle size={10}/></span>}
                    {order.status === "cancelado" && <span className="red"><FaCircle size={10}/></span>}
                    {order.status}
                  </td>
                  <td>{order.id < 10 ? `0${order.id}` : order.id}</td>
                  <td className="all-plates">
                    {JSON.parse(order.plates).map((plate, index)=>(
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
        </DesktopContent> */}
      </main>
      <Footer/>
    </Container>
  )
}