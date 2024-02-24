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
  const [cardView, setCardView] = useState(2);
  const navigate = new useNavigate();

  const [ref, setRef] = useState("");
  const [beb, setBeb] = useState("");
  const [sob, setSob] = useState("");

  const imageURL = `${api.defaults.baseURL}/files/`;

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

      const refeicaoFiltered = response.data.filter((item) => {
        return item.category === "Refeição";
      });
      const bebidaFiltered = response.data.filter((item) => {
        return item.category === "Sobremesa";
      });
      const sobremesaFiltered = response.data.filter((item) => {
        return item.category === "Bebida";
      });

      setRef(refeicaoFiltered);
      setBeb(bebidaFiltered);
      setSob(sobremesaFiltered);
    }

    fetchPlates();
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
            {ref &&
              ref.map((plate) => (
                <SwiperSlide key={String(plate.id)}>
                  <Card
                    plate={plate}
                    view={() => navigate(`/plateview/${plate.id}`)}
                    title={plate.name}
                    value={plate.value}
                    plateImage={`${imageURL}/${String(plate.image)}`}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </Section>

        {/* <Section title={"Refeições"}>
          <Swiper
            slidesPerView={cardView}
            spaceBetween={cardView * 40}
            loop={true}>
            {sob &&
              sob.map((plate) => (
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

        <Section title={"Refeições"}>
          <Swiper
            slidesPerView={cardView}
            spaceBetween={cardView * 40}
            loop={true}>
            {beb &&
              beb.map((plate) => (
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
        </Section> */}

        <Footer />
      </main>
    </Container>
  );
}
