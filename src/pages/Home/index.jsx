import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import cardImage from "../../assets/pngegg 1.png";
import { Section } from "../../components/Section";
import { Container, Banner, BannerText } from "./style";

import { api } from "../../service/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = new useNavigate();

  const [platesPerCategory, setPlatesPerCategory] = useState("");
  const [isFavorite, setIsFavorite] = useState([])

  const plateSections = ["Refeição", "Sobremesas", "Bebidas"];

  const imageURL = `${api.defaults.baseURL}/files/`;

  const selectPlates = () => {
    return platesPerCategory;
  }

  async function handleVerifyFavoritePlate(){
    const searchFavorites = await api.get("/favorites");
    setIsFavorite(searchFavorites.data);
    return searchFavorites.data;
  }

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get("/plates",);
      setPlatesPerCategory(response.data);
    }

    handleVerifyFavoritePlate();
    fetchPlates();
  }, []);


  return (
    <Container>
      <Header plates={selectPlates}/>

      <main>
        <Banner>
          <img src={cardImage} alt="" />

          <BannerText>
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredients selecionados.</p>
          </BannerText>
        </Banner>

        {plateSections && plateSections.map((section) => (
          <Section title={section} key={section}>

            {platesPerCategory && platesPerCategory.filter((plate) => plate.category === section)
            .map((plate) => (
              <Card
                key={String(plate.id)}
                plate={plate}
                view={() => navigate(`/plateview/${plate.id}`)}
                plateImage={`${imageURL}/${String(plate.image)}`}
                isFavorite={isFavorite}
                verifyFavorite={handleVerifyFavoritePlate}
              />
            ))}
          </Section>
          ))}
        <Footer />
      </main>
    </Container>
  );
}
