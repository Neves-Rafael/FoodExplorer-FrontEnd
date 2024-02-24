import {
  Container,
  PlateImage,
  Tags,
  ConfirmOrder,
  BackButton,
  Main,
  InfoText,
} from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Count } from "../../components/Count";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { api } from "../../service/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";

export function PlateView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plate, setPlate] = useState({});

  const imageURL = `${api.defaults.baseURL}/files/`;

  useEffect(() => {
    async function searchPlate() {
      const { data } = await api.get(`/plates/${id}`);
      setPlate(data);
      return;
    }
    searchPlate();
  }, []);

  return (
    <Container>
      <Header />

      <Main>
        <BackButton>
          <ButtonText title={"Voltar"} onClick={() => navigate(-1)} />
        </BackButton>

        <div>
          <PlateImage src={`${imageURL}/${String(plate.image)}`} alt="" />
        </div>

        <div>
          <InfoText>
            <h3>{plate.name}</h3>
            <p>{plate.description}</p>
          </InfoText>

          <Tags>
            {plate.ingredients &&
              plate.ingredients.map((ingredient) => (
                <Tag key={String(ingredient.id)} title={ingredient.name} />
              ))}
          </Tags>

          <ConfirmOrder>
            <Count />
            <Button title={"Fazer pedido"} />
          </ConfirmOrder>
        </div>
      </Main>
    </Container>
  );
}
