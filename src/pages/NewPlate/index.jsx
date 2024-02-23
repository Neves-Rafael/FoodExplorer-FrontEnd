import {
  Container,
  Section,
  Line1,
  Line2,
  Titles,
  Ingredients,
  UploadImage,
} from "./style";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { ButtonText } from "../../components/ButtonText";
import { BsBoxArrowUp } from "react-icons/bs";
import { IoChevronBack } from "react-icons/io5";
import { TagItem } from "../../components/TagItem";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function NewPlate() {
  const { createPlate } = useAuth();

  const [name, setName] = useState("adsadasd");
  const [category, setCategory] = useState("asdasdas");
  const [ingredients, setIngredients] = useState(["dasda", "sjksjlkajsa"]);
  const [value, setValue] = useState(25);
  const [description, setDescription] = useState("dasdsadsa");
  const [image, setImage] = useState(null);

  async function handleChangeImage(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  async function handleUpdate() {
    const plate = { name, category, ingredients, value, description };
    await createPlate({ plate, image });
  }

  return (
    <Container>
      <Header />

      <Titles>
        <ButtonText title={"Voltar"} icon={IoChevronBack} />

        <h2>Novo prato</h2>
      </Titles>

      <Section>
        <Line1>
          <div>
            <p>Imagem do prato</p>
            <UploadImage htmlFor="image">
              <BsBoxArrowUp size={28} />
              <span>Seleciona a Imagem</span>
              <input type="file" id="image" onChange={handleChangeImage} />
            </UploadImage>
          </div>

          <div>
            <p>Nome</p>
            <Input
              placeholder={"Ex: Salada Ceasar"}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <p>Categoria</p>
            <Select
              itemOption={["Refeição", "Sobremesa", "Prato Principal"]}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </Line1>

        <Line2>
          <div>
            <p>Ingredients</p>
            <Ingredients>
              <TagItem
                value={"Peixe frito"}
                onChange={(e) => setIngredients(e.target.value)}
              />
              <TagItem $isNew={true} />
            </Ingredients>
          </div>

          <div>
            <p>Preço</p>
            <Input onChange={(e) => setValue(e.target.value)} />
          </div>
        </Line2>

        <div>
          <p>Descrição</p>
          <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>

        <Button title={"Salvar alterações"} onClick={handleUpdate} />
      </Section>
    </Container>
  );
}
