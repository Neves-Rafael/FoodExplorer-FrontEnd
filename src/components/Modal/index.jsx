import { Container, Confirm } from "./style";
import { Button } from "../Button";

export function Modal({message, onClick, modalState}){
  
  return(
    <Container>
      <Confirm>
        <p>{message}</p>
        <div className="button-container">
          <Button title={"Cancelar"} onClick={() => modalState(false)}/>
          <Button title={"Continuar"} onClick={onClick}/>
        </div>
      </Confirm>
    </Container>
  )
};