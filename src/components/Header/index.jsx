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
import { useState, useEffect } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { RxExit } from "react-icons/rx";
import { useAuth } from "../../hooks/auth";
import { IoSearchOutline } from "react-icons/io5";
import { useContext } from "react";
import { PlateContext } from "../../hooks/plateRequest";
import { USER_ROLE } from "../../utils/roles"

export function Header() {
  const { logout, user } = useAuth();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { plateRequest, updateRequest } = useContext(PlateContext);

  const verifyAdminRole = user.role === USER_ROLE.ADMIN;

  const messageToAdminAccess = verifyAdminRole ? "Novo Prato" : `Pedidos (${plateRequest.length})`;

  useEffect(() => {
    updateRequest();
  }, []);

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
        <Button title={messageToAdminAccess} icon={verifyAdminRole ? null : PiReceipt} />
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
