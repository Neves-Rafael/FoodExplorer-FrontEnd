import { Button } from "../Button";
import { SideMenu } from "../SideMenu";
import { RxExit } from "react-icons/rx";
import { PiReceipt } from "react-icons/pi";
import { InputSearch } from "../InputSearch";
import { FoodExplorer } from "../FoodExplorer";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FoodExplorerAdmin } from "../FoodExplorerAdmin";
import { Container, MenuHamburger, Logout, OrderCount, Logo, Requests } from "./style";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles"
import { PlateContext } from "../../hooks/plateRequest";
import { useState, useEffect, useContext } from "react";

export function Header({plates}) {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const { plateRequest } = useContext(PlateContext);
  const [ countPlate, setCountPlate] = useState([]);
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);

  const verifyAdminRole = user.role === USER_ROLE.ADMIN;

  const messageToAdminAccess = verifyAdminRole ? "Novo Prato" : `Pedidos (${countPlate ? countPlate.length : 0})`;

  useEffect(() => {
    setCountPlate(plateRequest);
  }, [plateRequest]);

  useEffect(() => {
    setCountPlate(JSON.parse(localStorage.getItem("pedidos")));
  }, []);

  return (
    <Container>
      <MenuHamburger>
        <RxHamburgerMenu size={32} onClick={() => setMenuIsOpen(true)} />
      </MenuHamburger>

      <Logo onClick={() => navigate("/")}>
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
            <span>{countPlate ? countPlate.length : 0}</span>
          </>
        } 
      </OrderCount>

      <SideMenu menuIsOpen={menuIsOpen} menuIsClose={() => setMenuIsOpen(false)} plates={plates}/>
    </Container>
  );
}
