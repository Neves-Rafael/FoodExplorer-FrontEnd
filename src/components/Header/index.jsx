import { Button } from "../Button";
import { SideMenu } from "../SideMenu";
import { RxExit } from "react-icons/rx";
import { PiReceipt } from "react-icons/pi";
import { useAuth } from "../../hooks/auth";
import { FoodExplorer } from "../FoodExplorer";
import { RxHamburgerMenu } from "react-icons/rx";
import { InputSearch } from "../InputSearch";
import { FoodExplorerAdmin } from "../FoodExplorerAdmin";
import { Container, MenuHamburger, Logout, OrderCount, Logo, Requests } from "./style";
import { useNavigate } from "react-router-dom";

import { USER_ROLE } from "../../utils/roles"
import { PlateContext } from "../../hooks/plateRequest";
import { useState, useEffect, useContext } from "react";

export function Header({plates}) {
  const { logout, user } = useAuth();
  const { plateRequest, updateRequest } = useContext(PlateContext);

  const navigate = useNavigate();

  const [ menuIsOpen, setMenuIsOpen ] = useState(false);

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

      <InputSearch plates={plates}/>

      <Requests>
        <Button 
          title={messageToAdminAccess} icon={verifyAdminRole ? null : PiReceipt} 
          onClick={verifyAdminRole ? () => navigate("/newplate") : null }
        />
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

      <SideMenu menuIsOpen={menuIsOpen} menuIsClose={() => setMenuIsOpen(false)} plates={plates}/>
    </Container>
  );
}
