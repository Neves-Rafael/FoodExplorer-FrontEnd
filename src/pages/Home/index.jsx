import "swiper/css";
import { IoSearchOutline } from "react-icons/io5";
import { Container, Banner, BannerText } from "./style";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import cardImage from "../../assets/pngegg 1.png";
import { Section } from "../../components/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { api } from "../../service/api";

export function Home() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [plates, setPlates] = useState([]);

  const updateWidthScreen = () => {
    setWidthScreen(window.innerWidth);
  };

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get("/plates");
      const data = response.data;
      setPlates(data);
    }
    fetchPlates();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWidthScreen);
  }, []);

  const quantityCards = widthScreen / 240;

  return (
    <Container>
      <Header icon={IoSearchOutline} />

      <main>
        <Banner>
          <img src={cardImage} alt="" />

          <BannerText>
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredients selecionados.</p>
          </BannerText>
        </Banner>
        {/* <Section title={"Refeições"}>
          <Swiper
            spaceBetween={quantityCards * 30}
            slidesPerView={quantityCards}
            onSlideChange={() => console.log("slide change")}>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            ;
            {plates &&
              plates.map((plate) => (
                <SwiperSlide key={String(plate.id)}>
                  <Card
                    title={plate.name}
                    value={plate.value}
                    plateImage={plate.image}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </Section> */}
      </main>
      {/* <Footer /> */}
    </Container>
  );
}
