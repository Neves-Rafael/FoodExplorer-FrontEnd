import { IoSearchOutline } from "react-icons/io5";
import { Container, Banner, BannerText } from "./style";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import cardImage from "../../assets/pngegg 1.png";
import { Section } from "../../components/Section";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { defaultPlates } from "../../utils/plates";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

export function Home() {
  register();
  const [plates, setPlates] = useState([]);
  const [cardView, setCardView] = useState(2);

  useEffect(() => {
    function handleResize() {
      const handleWindow = window.innerWidth;
      const viewPerWidth = handleWindow / 240;

      if (window.innerWidth < 1110) {
        setCardView(viewPerWidth);
      } else {
        setCardView(4.4);
      }

      console.log(viewPerWidth);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get("/plates");
      const data = response.data;
      const allPlates = [...defaultPlates, ...data];
      setPlates(allPlates);
    }
    fetchPlates();
  }, []);
  console.log(plates);

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

        <Section title={"Refeições"}>
          <Swiper
            slidesPerView={cardView}
            spaceBetween={cardView * 40}
            loop={true}>
            {plates &&
              plates.map((plate) => (
                <SwiperSlide key={String(plate.id)}>
                  <Card
                    title={plate.name}
                    value={plate.value}
                    plateImage={String(plate.image)}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </Section>

        <Section title={"Sobremesas"}>
          <Swiper
            slidesPerView={cardView}
            spaceBetween={cardView * 40}
            loop={true}>
            {plates &&
              plates.map((plate) => (
                <SwiperSlide key={String(plate.id)}>
                  <Card
                    title={plate.name}
                    value={plate.value}
                    plateImage={String(plate.image)}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </Section>

        <Section title={"Bebidas"}>
          <Swiper
            slidesPerView={cardView}
            spaceBetween={cardView * 40}
            loop={true}>
            {plates &&
              plates.map((plate) => (
                <SwiperSlide key={String(plate.id)}>
                  <Card
                    title={plate.name}
                    value={plate.value}
                    plateImage={String(plate.image)}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </Section>
        <Footer />
      </main>
    </Container>
  );
}
