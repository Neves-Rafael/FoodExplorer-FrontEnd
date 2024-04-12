import { Container } from "./style";
import explorerLogo from "../../assets/explorer-logo.svg";

export function FoodExplorerAdmin() {
  return (
    <Container>
      <img src={explorerLogo} />
      <p>Food Explorer</p>
      <span>admin</span>
    </Container>
  );
}
