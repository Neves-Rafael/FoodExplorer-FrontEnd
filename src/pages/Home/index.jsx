import { Container, Banner, BannerText } from "./style";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import cardImage from "../../assets/pngegg 1.png";
import { Section } from "../../components/Section";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
// import { defaultPlates } from "../../utils/plates";
import { useNavigate } from "react-router-dom";

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
  const navigate = new useNavigate();

  const [refeicao, setRefeicao] = useState([]);
  const [sobremesa, setSobremesa] = useState([]);
  const [bebida, setBebida] = useState([]);

  const imageURL = `${api.defaults.baseURL}/files/`;

  function separePerSection() {
    const filteredRefeicao = plates.filter(
      (item) => item.category === "Refeição"
    );

    const filteredBebidas = plates.filter((item) => item.category === "Bebida");

    const filteredSobremesas = plates.filter(
      (item) => item.category === "Sobremesas"
    );

    setRefeicao(filteredRefeicao);
    setBebida(filteredBebidas);
    setSobremesa(filteredSobremesas);
  }

  useEffect(() => {
    function handleResize() {
      const handleWindow = window.innerWidth;
      const viewPerWidth = handleWindow / 240;

      if (window.innerWidth < 1110) {
        setCardView(viewPerWidth);
      } else {
        setCardView(4.4);
      }
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
      setPlates(data);
    }
    fetchPlates();

    separePerSection();
  }, []);

  return (
    <Container>
      <Header />

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
            {refeicao &&
              refeicao.map((plate) => (
                <SwiperSlide key={String(plate.id)}>
                  <Card
                    view={() => navigate(`/plateview/${plate.id}`)}
                    title={plate.name}
                    value={plate.value}
                    plateImage={`${imageURL}/${String(plate.image)}`}
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
            {sobremesa &&
              sobremesa.map((plate) => (
                <SwiperSlide key={String(plate.id)}>
                  <Card
                    view={() => navigate(`/plateview/${plate.id}`)}
                    title={plate.name}
                    value={plate.value}
                    plateImage={`${imageURL}/${String(plate.image)}`}
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
            {bebida &&
              bebida.map((plate) => (
                <SwiperSlide key={String(plate.id)}>
                  <Card
                    view={() => navigate(`/plateview/${plate.id}`)}
                    title={plate.name}
                    value={plate.value}
                    plateImage={`${imageURL}/${String(plate.image)}`}
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
