/* eslint-disable react/prop-types */
import { Input } from "../Input";
import { Footer } from "../Footer";
import { Container } from "./style";
import { IoMdClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

export function SideMenu({ menuIsOpen, menuIsClose }) {
  return (
    <Container data-menu-is-open={menuIsOpen}>
      <div className="menu-header">
        <div>
          <IoMdClose size={34} onClick={menuIsClose} /> Menu
        </div>
      </div>
      <Input icon={IoSearchOutline} placeholder={"Busque por pratos ou ingredients"} />
      <p className="leave">Sair</p>
      <Footer />
    </Container>
  );
}
