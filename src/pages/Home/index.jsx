import "swiper/css";
import { Container } from "./style";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import cardImage from "../../assets/pngegg 1.png";
import { Section } from "../../components/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

export function Home() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  const updateWidthScreen = () => {
    setWidthScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthScreen);
  }, []);

  const quantityCards = widthScreen / 240;

  return (
    <Container>
      <Header />
      <main>
        <div className="cardHomePage">
          <img src={cardImage} alt="" />
          <div className="cardHomePageText">
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredients selecionados.</p>
          </div>
        </div>
        <Section title={"Refeições"}>
          <Swiper
            spaceBetween={quantityCards * 30}
            slidesPerView={quantityCards}
            onSlideChange={() => console.log("slide change")}>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            ...
          </Swiper>
        </Section>
      </main>
      <Footer />
    </Container>
  );
}
