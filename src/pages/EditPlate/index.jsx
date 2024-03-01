import {
  Container,
  Section,
  Line1,
  Line2,
  Titles,
  Ingredients,
  UploadImage,
  ButtonAction
} from "./style";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { ButtonText } from "../../components/ButtonText";
import { BsBoxArrowUp } from "react-icons/bs";
import { IoChevronBack } from "react-icons/io5";
import { TagItem } from "../../components/TagItem";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";

export function EditPlate() {
  const { createPlate } = useAuth();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [value, setValue] = useState(75);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [isDisable, setIsDisable] = useState(true);

  const handleCategoryInSelectComponent = (category) => {
    setCategory(category)
  }


  async function handleChangeImage(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  async function handleCreatePlate() {
    if(name && category && ingredients && value && description && image){
      const plate = { name, category, ingredients, value, description };
      await createPlate({ plate, image });
    }
    return
  }

  useEffect(() =>{
    if(name && category && ingredients && value && description && image){
      setIsDisable(false)
    }

  }, [name, category, ingredients, value, description, image])

  return (
    <Container>
      <Header />

      <Titles>
        <ButtonText title={"Voltar"} icon={IoChevronBack} />

        <h2>Editar prato</h2>
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
              handleCategory={handleCategoryInSelectComponent}
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
          <textarea 
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Fale brevemente sobre o prato, seus ingredients e composição"/>
        </div>

        <ButtonAction >
          <Button title={"Excluir prato"} onClick={handleCreatePlate}/> 
          <Button title={"Salvar alterações"} onClick={handleCreatePlate} disabled={isDisable}/> 
        </ButtonAction>
      </Section>
    </Container>
  );
}
