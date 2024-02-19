import { RxHamburgerMenu } from "react-icons/rx";
import { PiReceipt } from "react-icons/pi";
import { FoodExplorer } from "../FoodExplorer";
import { SideMenu } from "../SideMenu";
import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { RxExit } from "react-icons/rx";
import { Container, MenuHamburger, Logout, SearchBar } from "./style";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { logout } = useAuth();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <MenuHamburger>
        <RxHamburgerMenu size={32} onClick={() => setMenuIsOpen(true)} />
      </MenuHamburger>

      <FoodExplorer />

      <SearchBar>
        <Input placeholder={"Busque por pratos ou ingredients"} />
      </SearchBar>

      <Button title={"Pedidos"} />

      <Logout onClick={logout}>
        <RxExit size={32} />
      </Logout>

      <div className="order-counter">
        <PiReceipt size={32} />
        <span>1</span>
      </div>

      <SideMenu
        menuIsOpen={menuIsOpen}
        menuIsClose={() => setMenuIsOpen(false)}
      />
    </Container>
  );
}
