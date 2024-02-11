import { Container } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import cardImage from "../../assets/pngegg 1.png";

export function Home() {
  return (
    <Container>
      <Header />
      <div className="cardHomePage">
        <img src={cardImage} alt="" />
        <div className="cardHomePageText">
          <h3>Sabores inigualáveis</h3>
          <p>Sinta o cuidado do preparo com ingredients selecionados.</p>
        </div>
      </div>
      <Footer />
    </Container>
  );
}
