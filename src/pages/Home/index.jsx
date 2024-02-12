import { Container } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import cardImage from "../../assets/pngegg 1.png";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
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
      <Footer />
    </Container>
  );
}
