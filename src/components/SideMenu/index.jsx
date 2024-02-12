import { Container } from "./style";
import { Input } from "../Input";
import { Footer } from "../Footer";
import { IoMdClose } from "react-icons/io";

export function SideMenu() {
  return (
    <Container>
      <div className="menu-header">
        <div>
          <IoMdClose size={34} /> Menu
        </div>
      </div>
      <Input placeholder={"Busque por pratos ou ingredients"} />
      <p className="leave">Sair</p>
      <Footer />
    </Container>
  );
}
