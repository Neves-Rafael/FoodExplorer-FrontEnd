import { Container } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import imageTest from "../../assets/pngegg 1.png";
import { Count } from "../../components/Count";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";

export function PlateView() {
  return (
    <div>
      <Header />
      <Container>
        <p className="back-button"> Voltar </p>
        <img className="plate-image" src={imageTest} alt="" />
        <h3>Salada Ravanello</h3>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
        <div className="tags">
          <Tag title={"alface"} />
          <Tag title={"alface"} />
          <Tag title={"alface"} />
          <Tag title={"alface"} />
          <Tag title={"alface"} />
        </div>
        <div className="confirm-order">
          <Count />
          <Button title={"Fazer pedido"} />
        </div>
      </Container>

      <Footer />
    </div>
  );
}
