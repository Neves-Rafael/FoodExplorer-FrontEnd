import { Input } from "../Input";
import { Button } from "../Button";
import { SideMenu } from "../SideMenu";
import { RxExit } from "react-icons/rx";
import { PiReceipt } from "react-icons/pi";
import { useAuth } from "../../hooks/auth";
import { FoodExplorer } from "../FoodExplorer";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { FoodExplorerAdmin } from "../FoodExplorerAdmin";
import {Container, MenuHamburger, Logout, SearchBar, OrderCount, Logo, Requests} from "./style";

import { USER_ROLE } from "../../utils/roles"
import { useState, useEffect, useContext } from "react";
import { PlateContext } from "../../hooks/plateRequest";

export function Header() {
  const { logout, user } = useAuth();
  const { plateRequest, updateRequest } = useContext(PlateContext);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

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
        {verifyAdminRole ? <FoodExplorerAdmin/> : <FoodExplorer />}
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
        {verifyAdminRole ? null :
          <>
            <PiReceipt size={32} />
            <span>{plateRequest.length}</span>
          </>
        } 
      </OrderCount>

      <SideMenu
        menuIsOpen={menuIsOpen}
        menuIsClose={() => setMenuIsOpen(false)}
      />
    </Container>
  );
}
