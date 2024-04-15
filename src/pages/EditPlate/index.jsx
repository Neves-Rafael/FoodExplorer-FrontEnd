import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { BsBoxArrowUp } from "react-icons/bs";
import { Input } from "../../components/Input";
import { IoChevronBack } from "react-icons/io5";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { TagItem } from "../../components/TagItem";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../service/api";
import { Footer } from "../../components/Footer";
import { Modal } from "../../components/Modal";
import {
  Container,
  Section,
  FirstGroupInfo,
  SecondGroupInfo,
  Titles,
  Ingredients,
  UploadImage,
  ButtonAction,
} from "./style";

export function EditPlate() {
  const { updatePlate, deletePlate } = useAuth();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(null);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [isDisable, setIsDisable] = useState(true);
  const [plateToUpdate, setPlateToUpdate] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  const handleCategoryInSelectComponent = (category) => {
    setCategory(category);
  };

  function handleAddIngredient() {
    if (newIngredient.length < 1) {
      return;
    }

    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  const handleModalIsOpen = (state) => {
    setModalIsOpen(state);
  };

  async function handleChangeImage(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  async function handleUpdatePlate() {
    if (name && category && ingredients && value && description) {
      const plate = { name, category, ingredients, value, description, id };
      await updatePlate({ plate, image });
      navigate("/");
    }
    return;
  }

  async function handleDeletePlate() {
    deletePlate(id);
    navigate("/");
  }

  async function placeholderPlateToEdit() {
    if (plateToUpdate.name) {
      setName(plateToUpdate.name);
      setDescription(plateToUpdate.description);
      setIngredients(plateToUpdate.ingredients.map((ing) => ing.name));
      setValue(plateToUpdate.value);
      setCategory(plateToUpdate.category);
    }
  }

  useEffect(() => {
    if (name && category && ingredients && value && description) {
      setIsDisable(false);
    }
  }, [name, category, ingredients, value, description, image]);

  useEffect(() => {
    async function searchPlate() {
      const { data } = await api.get(`/plates/${id}`);
      setPlateToUpdate(data);
      return;
    }
    searchPlate();
  }, []);

  useEffect(() => {
    placeholderPlateToEdit();
  }, [plateToUpdate]);

  return (
    <Container>
      <Header />

      <Titles>
        <ButtonText
          title={"Voltar"}
          icon={IoChevronBack}
          onClick={() => navigate(-1)}
        />

        <h2>Editar prato</h2>
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
              onChange={(e) => setName(e.target.value)}
              placeholder={"Ex: Salada Ceasar"}
            />
          </div>

          <div>
            <p>Categoria</p>
            <Select
              itemOption={["Refeição", "Sobremesas", "Bebidas"]}
              onChange={(e) => setCategory(e.target.value)}
              handleCategory={handleCategoryInSelectComponent}
              category={plateToUpdate.category}
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
            <Input onChange={(e) => setValue(e.target.value)} value={value} />
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

        <ButtonAction>
          <Button
            title={"Excluir prato"}
            onClick={() => setModalIsOpen(true)}
          />
          <Button
            title={"Salvar alterações"}
            onClick={handleUpdatePlate}
            disabled={isDisable}
          />
        </ButtonAction>
      </Section>
      <Footer />
      {modalIsOpen && (
        <Modal
          onClick={handleDeletePlate}
          modalState={handleModalIsOpen}
          message={`Realmente deseja excluir este prato ?`}
          additionalInfo={plateToUpdate}
        />
      )}
    </Container>
  );
}
