import { Container, RequestList , Options } from "./style";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer";
import { useState, useEffect } from "react";
import { api } from "../../service/api";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag"

export function Cart(){
  const [plateRequest, setPlateRequest] = useState([]);
  const imageURL = `${api.defaults.baseURL}/files/`;
  const [plateSum, setPlateSum] = useState("");


  function totalSum(){
    const dale = JSON.parse(localStorage.getItem("pedidos")) || null;
    setPlateRequest(dale);

    let somaTotal = 0;

    for (const plate of dale) {
      somaTotal += Number(plate.price.replace(",", "."));
    }

    setPlateSum(somaTotal.toFixed(2).replace(".", ","))
  }


  function removePlateList(item){
    const filterPLate = plateRequest.filter((plate) => {
      if(plate !== item){
        return plate
      }
    })
   
    localStorage.setItem("pedidos", JSON.stringify(filterPLate));

    totalSum();
  }

  useEffect(() => {
    totalSum();
  }, [])



  return(
    <Container>
      <Header/>
      <main>
        <h2>Meus Pedidos</h2>

        <RequestList>
          {plateRequest.length > 0 && plateRequest ? plateRequest.map((item, index) => (
            <div className="plate-content" key={index}>
              <img src={`${imageURL}/${String(item.plate.image)}`} alt="" />
              <div className="plate-info">
                <div>
                  <p>{`${item.quantity} x ${item.plate.name}`}</p>
                  <div className="tags-plate">
                    {item.plate.ingredients.map((ingredient, index) => (
                      <Tag title={ingredient.name} key={index}/>
                    ))}
                  </div>
                  <p>{`R$ ${item.price}`}</p>
                </div>
                  <button className="delete-plate-request" onClick={() => removePlateList(item)}>Excluir</button>
              </div>
            </div> ))
            :
            <div className="plate-content">
              <p>Nenhum Pedido Registrado</p>
            </div>}

        </RequestList>

        <h3>{`Total R$ ${plateSum || "00,00"}`}</h3>

        <Options>
          <Button title={"Voltar ao cardápio"}/>
          <Button title={"Excluir pedidos"}/>
          <Button title={"Pagamento"}/>
        </Options>
      </main>
      <Footer/>
    </Container>
  )
}