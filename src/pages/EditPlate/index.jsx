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
import { Container, Section, Line1, Line2, Titles, Ingredients, UploadImage, ButtonAction } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../service/api"

export function EditPlate() {
  const { updatePlate } = useAuth();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [isDisable, setIsDisable] = useState(true);
  const [plateToUpdate, setPlateToUpdate] = useState({})
  
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("")
  const { id } = useParams();


  const navigate = useNavigate();

  const handleCategoryInSelectComponent = (category) => {
    setCategory(category)
  }

  function handleAddIngredient(){
    if(newIngredient.length < 1){
      return
    }

    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  async function handleChangeImage(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  async function handleUpdatePlate() {
    if(name && category && ingredients && value && description && image){
      const plate = { name, category, ingredients, value, description, id };
      await updatePlate({ plate, image });
      console.log("atualizado")
    }
    return
  }

  async function handleDeletePlate(){
    await api.delete(`/plates/${id}`);
  }

  async function placeholderPlateToEdit(){
    if(plateToUpdate.name){
      console.log(plateToUpdate)
      setName(plateToUpdate.name)
      setDescription(plateToUpdate.description)
      setIngredients(plateToUpdate.ingredients.map((ing) => (ing.name)))
      setValue(Number(plateToUpdate.value))
      setCategory(plateToUpdate.category)
    }
  }


  useEffect(() =>{
    if(name && category && ingredients && value && description && image){
      setIsDisable(false)
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
    // Esta função será chamada quando plateToUpdate for atualizado
    placeholderPlateToEdit();
  }, [plateToUpdate]);

  return (
    <Container>
      <Header />

      <Titles>
        <ButtonText title={"Voltar"} icon={IoChevronBack} onClick={() => navigate(-1)}/>

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
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={"Ex: Salada Ceasar"}
            />
          </div>

          <div>
            <p>Categoria</p>
            <Select
              category={category}
              onChange={(e) => setCategory(e.target.value)}
              handleCategory={handleCategoryInSelectComponent}
            />
          </div>
        </Line1>

        <Line2>
          <div>
            <p>Ingredients</p>
            <Ingredients>
              {ingredients && ingredients.map((ingredient, index) => (
                <TagItem value={ingredient}  key={index} onClick={() => handleRemoveIngredient(ingredient)}/>
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
            <Input onChange={(e) => setValue(e.target.value)} value={String(value)} />
          </div>
        </Line2>

        <div>
          <p>Descrição</p>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Fale brevemente sobre o prato, seus ingredients e composição"/>
        </div>

        <ButtonAction >
          <Button title={"Excluir prato"} onClick={handleDeletePlate}/> 
          <Button title={"Salvar alterações"} onClick={handleUpdatePlate} disabled={isDisable}/> 
        </ButtonAction>
      </Section>
    </Container>
  );
}
