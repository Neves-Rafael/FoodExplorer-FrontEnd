import { Container, Confirm } from "./style";
import { Button } from "../Button";

export function Modal({confirmMessage, onClick, modalState, additionalInfo}){
  
  return(
    <Container>
      <Confirm>
        <p>{confirmMessage}</p>
        {additionalInfo && 
        <>
          <p>Titulo: {additionalInfo.name}</p>
          <p>Categoria: {additionalInfo.category}</p>
          <p>Valor: {additionalInfo.value}</p>
          <p>Descrição: {additionalInfo.description}</p>
        </>}
        <div className="button-container">
          <Button title={"Cancelar"} onClick={() => modalState(false)}/>
          <Button title={"Apagar"} onClick={onClick}/>
        </div>
      </Confirm>
    </Container>
  )
};