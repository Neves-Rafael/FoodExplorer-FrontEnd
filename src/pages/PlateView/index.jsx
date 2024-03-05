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
import { useContext } from "react";
import { PlateContext } from "../../hooks/plateRequest";
import { RiArrowLeftSLine } from "react-icons/ri";
import { USER_ROLE } from "../../utils/roles"
import { useAuth } from "../../hooks/auth";

export function PlateView() {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [ plate, setPlate ] = useState({});

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
      price: price.replace(",", ".") ,
    };
    
    allRequest.push(newRequest);
    localStorage.setItem("pedidos", JSON.stringify(allRequest));
    console.log("pedido feito com sucesso!");
    updateRequest();
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
          <ButtonText title={"Voltar"} icon={RiArrowLeftSLine} onClick={() => navigate(-1)} />
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
            {verifyAdminRole ? null: <Count onCountChange={handleCountChange} />}
            <Button title={verifyAdminRole ? "Editar prato" : `Incluir R$ - ${price}`} onClick={calculate} />
          </ConfirmOrder>
        </div>
      </Main>
      <Footer/>
    </Container>
  );
}
