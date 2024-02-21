import {
  Container,
  MenuHamburger,
  Logout,
  SearchBar,
  OrderCount,
  Logo,
  Requests,
} from "./style";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiReceipt } from "react-icons/pi";
import { FoodExplorer } from "../FoodExplorer";
import { SideMenu } from "../SideMenu";
import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { RxExit } from "react-icons/rx";
import { useAuth } from "../../hooks/auth";
import { IoSearchOutline } from "react-icons/io5";

export function Header() {
  const { logout } = useAuth();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <MenuHamburger>
        <RxHamburgerMenu size={32} onClick={() => setMenuIsOpen(true)} />
      </MenuHamburger>

      <Logo>
        <FoodExplorer />
      </Logo>

      <SearchBar>
        <Input
          placeholder={"Busque por pratos ou ingredients"}
          icon={IoSearchOutline}
        />
      </SearchBar>

      <Requests>
        <Button title={`Pedidos (${0})`} icon={PiReceipt} />
      </Requests>

      <Logout onClick={logout}>
        <RxExit size={32} />
      </Logout>

      <OrderCount>
        <PiReceipt size={32} />
        <span>1</span>
      </OrderCount>

      <SideMenu
        menuIsOpen={menuIsOpen}
        menuIsClose={() => setMenuIsOpen(false)}
      />
    </Container>
  );
}
