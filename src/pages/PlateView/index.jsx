import { useContext } from "react";
import { api } from "../../service/api";
import { Tag } from "../../components/Tag";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";
import { Count } from "../../components/Count";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { RiArrowLeftSLine } from "react-icons/ri";
import { PlateContext } from "../../hooks/plateRequest";
import { ButtonText } from "../../components/ButtonText";
import {
  Container,
  PlateImage,
  Tags,
  ConfirmOrder,
  BackButton,
  Main,
  InfoText,
} from "./style";

export function PlateView() {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [plate, setPlate] = useState({});

  const imageURL = `${api.defaults.baseURL}/files/`;

  const verifyAdminRole = user.role === USER_ROLE.ADMIN;

  const [countValue, setCountValue] = useState(1);

  const priceInReal = plate.value ? plate.value.replace(",", ".") : null;

  const price = (priceInReal * countValue).toFixed(2).replace(".", ",");

  const { updateRequest } = useContext(PlateContext);

  const handleCountChange = (newValue) => {
    setCountValue(newValue);
  };

  function calculate() {
    const allRequest = JSON.parse(localStorage.getItem("pedidos")) || [];

    const newRequest = {
      plate,
      price: price.replace(",", "."),
    };

    allRequest.push(newRequest);
    localStorage.setItem("pedidos", JSON.stringify(allRequest));
    updateRequest();
  }

  function handleSelectOption() {
    if (verifyAdminRole) {
      navigate(`/editplate/${id}`);
      return;
    }
    calculate();
  }

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
          <ButtonText
            title={"Voltar"}
            icon={RiArrowLeftSLine}
            onClick={() => navigate(-1)}
          />
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
            {verifyAdminRole ? null : (
              <Count onCountChange={handleCountChange} />
            )}
            <Button
              title={verifyAdminRole ? "Editar prato" : `Incluir R$ - ${price}`}
              onClick={handleSelectOption}
            />
          </ConfirmOrder>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
