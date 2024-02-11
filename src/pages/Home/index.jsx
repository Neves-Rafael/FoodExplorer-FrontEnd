import { Container } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import cardImage from "../../assets/pngegg 1.png";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

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
      <Section title={"Refeições"}>
        <Card />
      </Section>
      <Footer />
    </Container>
  );
}
