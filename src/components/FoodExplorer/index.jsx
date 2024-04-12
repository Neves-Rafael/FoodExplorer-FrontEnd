import { Container } from "./style";
import explorerLogo from "../../assets/explorer-logo.svg";

export function FoodExplorer() {
  return (
    <Container>
      <img src={explorerLogo} />
      <p>Food Explorer</p>
    </Container>
  );
}
