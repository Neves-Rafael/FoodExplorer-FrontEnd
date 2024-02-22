import { Container, Section } from "./style";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";

export function NewPlate() {
  return (
    <Container>
      <Header />

      <Section>
        <p className="back-to-menu">Voltar</p>

        <h2>Novo prato</h2>

        <div className="input-create">
          <div>
            <p>Imagem do prato</p>
            <button className="image-select">Selecione imagem</button>
          </div>

          <div>
            <p>Nome</p>
            <Input placeholder={"Ex: Salada Ceasar"} />
          </div>

          <div>
            <p>Categoria</p>
            <Select />
          </div>

          <div>
            <p>Ingredients</p>
            <Input type="" />
          </div>

          <div>
            <p>Preço</p>
            <Input />
          </div>

          <div>
            <p>Descrição</p>
            <textarea></textarea>
          </div>

          <Button title={"Salvar alterações"} />
        </div>
      </Section>
    </Container>
  );
}
