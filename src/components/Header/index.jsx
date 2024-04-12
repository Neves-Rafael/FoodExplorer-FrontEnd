import { Button } from "../Button";
import { SideMenu } from "../SideMenu";
import { RxExit } from "react-icons/rx";
import { PiReceipt } from "react-icons/pi";
import { InputSearch } from "../InputSearch";
import { FoodExplorer } from "../FoodExplorer";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FoodExplorerAdmin } from "../FoodExplorerAdmin";
import {
  Container,
  MenuHamburger,
  Logout,
  MenuOptions,
  OrderCount,
  Logo,
  Requests,
} from "./style";

import { IoIosOptions } from "react-icons/io";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { PlateContext } from "../../hooks/plateRequest";
import { useState, useEffect, useContext, useRef } from "react";

export function Header() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const { plateRequest } = useContext(PlateContext);
  const [countPlate, setCountPlate] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [optionsIsOpen, setOptionsIsOpen] = useState(false);
  const selectRef = useRef(null);

  const verifyAdminRole = user.role === USER_ROLE.ADMIN;

  const messageToAdminAccess = verifyAdminRole
    ? "Novo Prato"
    : `Pedidos (${countPlate ? countPlate.length : 0})`;

  function handleOutsideClick(event) {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setOptionsIsOpen(false);
    }
  }

  function handleLogout() {
    logout();
    navigate("/");
  }

  function handlerOpenOptions() {
    setOptionsIsOpen((prevState) => (prevState === true ? false : true));
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setCountPlate(plateRequest);
  }, [plateRequest]);

  useEffect(() => {
    const requestStorage = JSON.parse(localStorage.getItem("pedidos"));

    setCountPlate(requestStorage);
  }, []);

  return (
    <Container>
      <MenuHamburger>
        <RxHamburgerMenu size={32} onClick={() => setMenuIsOpen(true)} />
      </MenuHamburger>

      <Logo onClick={() => navigate("/")}>
        {verifyAdminRole ? <FoodExplorerAdmin /> : <FoodExplorer />}
      </Logo>

      <InputSearch />

      <MenuOptions $isopen={optionsIsOpen} ref={selectRef}>
        <IoIosOptions size={32} onClick={handlerOpenOptions} />
        <div className="options-header">
          {!verifyAdminRole && (
            <p onClick={() => navigate("/favorites")}>Favoritos</p>
          )}
          <p onClick={() => navigate("/order-history")}>Histórico de pedido</p>
          <p onClick={() => navigate("/profile")}>Perfil</p>
          <p onClick={() => navigate("/about")}>Quem somos</p>
        </div>
      </MenuOptions>

      <Requests>
        <Button
          title={messageToAdminAccess}
          icon={verifyAdminRole ? null : PiReceipt}
          onClick={
            verifyAdminRole
              ? () => navigate("/newplate")
              : () => navigate("/cart")
          }
        />
      </Requests>

      <Logout onClick={handleLogout}>
        <RxExit size={32} />
      </Logout>

      <OrderCount onClick={() => navigate("/cart")}>
        {verifyAdminRole ? null : (
          <>
            <PiReceipt size={32} />
            <span>{countPlate ? countPlate.length : 0}</span>
          </>
        )}
      </OrderCount>

      <SideMenu
        menuIsOpen={menuIsOpen}
        menuIsClose={() => setMenuIsOpen(false)}
      />
    </Container>
  );
}
