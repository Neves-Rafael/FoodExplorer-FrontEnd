import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { BsBoxArrowUp } from "react-icons/bs";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { Footer } from "../../components/Footer";
import { TagItem } from "../../components/TagItem";
import { ButtonText } from "../../components/ButtonText";
import {
  Container,
  Section,
  FirstGroupInfo,
  SecondGroupInfo,
  Titles,
  Ingredients,
  UploadImage,
} from "./style";

export function NewPlate() {
  const { createPlate } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [isDisable, setIsDisable] = useState(true);

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const handleCategoryInSelectComponent = (category) => {
    setCategory(category);
  };

  async function handleChangeImage(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  function handleAddIngredient() {
    if (newIngredient.length < 1) {
      return;
    }

    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  async function handleCreatePlate() {
    const transformeValueToNumber = Number(value.replace(",", "."));

    if (isNaN(transformeValueToNumber)) {
      return;
    }

    if (name && category && ingredients && value && description && image) {
      const plate = { name, category, ingredients, value, description };
      await createPlate({ plate, image });

      setName("");
      setValue("");
      setCategory("");
      setDescription("");
      setImage(null);
      setIngredients([]);
      setIsDisable(true);
    }
    return;
  }

  useEffect(() => {
    if (name && category && ingredients && value && description && image) {
      setIsDisable(false);
    }
  }, [name, category, ingredients, value, description, image]);

  return (
    <Container>
      <Header />

      <Titles>
        <ButtonText
          title={"Voltar"}
          icon={IoChevronBack}
          onClick={() => navigate(-1)}
        />

        <h2>Novo prato</h2>
      </Titles>

      <Section>
        <FirstGroupInfo>
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
              value={name}
              placeholder={"Ex: Salada Ceasar"}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <p>Categoria</p>
            <Select
              onChange={(e) => setCategory(e.target.value)}
              handleCategory={handleCategoryInSelectComponent}
              itemOption={["Refeição", "Sobremesas", "Bebidas"]}
              placeholder={"Exemplo: Refeição"}
            />
          </div>
        </FirstGroupInfo>

        <SecondGroupInfo>
          <div>
            <p>Ingredients</p>
            <Ingredients>
              {ingredients &&
                ingredients.map((ingredient, index) => (
                  <TagItem
                    value={ingredient}
                    key={index}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}

              <TagItem
                $isNew
                placeholder={"Novo Ingrediente"}
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </Ingredients>
          </div>

          <div>
            <p>Preço</p>
            <Input
              onChange={(e) => setValue(e.target.value)}
              placeholder={"Exemplo: 99,00"}
              value={value}
            />
          </div>
        </SecondGroupInfo>

        <div>
          <p>Descrição</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Fale brevemente sobre o prato, seus ingredients e composição"
          />
        </div>

        <Button
          title={"Salvar alterações"}
          onClick={handleCreatePlate}
          disabled={isDisable}
        />
      </Section>
      <Footer />
    </Container>
  );
}
