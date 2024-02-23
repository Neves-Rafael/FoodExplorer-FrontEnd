import { Container, Section, Line1, Line2, Titles, Ingredients } from "./style";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { ButtonText } from "../../components/ButtonText";
import { BsBoxArrowUp } from "react-icons/bs";
import { IoChevronBack } from "react-icons/io5";
import { TagItem } from "../../components/TagItem";

export function NewPlate() {
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
            <Button title={"Selecione a imagem"} icon={BsBoxArrowUp} />
          </div>

          <div>
            <p>Nome</p>
            <Input placeholder={"Ex: Salada Ceasar"} />
          </div>

          <div>
            <p>Categoria</p>
            <Select itemOption={["Refeição", "Sobremesa", "Prato Principal"]} />
          </div>
        </Line1>

        <Line2>
          <div>
            <p>Ingredients</p>
            <Ingredients>
              <TagItem value={"Peixe frito"} />
              <TagItem $isNew={true} />
            </Ingredients>
          </div>

          <div>
            <p>Preço</p>
            <Input />
          </div>
        </Line2>

        <div>
          <p>Descrição</p>
          <textarea></textarea>
        </div>

        <Button title={"Salvar alterações"} />
      </Section>
    </Container>
  );
}
