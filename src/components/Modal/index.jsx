import { Container, Confirm } from "./style";
import { Button } from "../Button";

export function Modal({confirmMessage}){
  confirmMessage = "Mensagem de teste";
  return(
    <Container>
      <Confirm>
        <p>{confirmMessage}</p>
        <div className="button-container">
          <Button title={"Cancelar"}/>
          <Button title={"Apagar"}/>
        </div>
      </Confirm>
    </Container>
  )
};