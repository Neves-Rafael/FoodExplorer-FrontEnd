import { Button } from "../Button";
import { SideMenu } from "../SideMenu";
import { RxExit } from "react-icons/rx";
import { PiReceipt } from "react-icons/pi";
import { InputSearch } from "../InputSearch";
import { FoodExplorer } from "../FoodExplorer";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FoodExplorerAdmin } from "../FoodExplorerAdmin";
import { Container, MenuHamburger, Logout, MenuOptions, OrderCount, Logo, Requests } from "./style";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { PlateContext } from "../../hooks/plateRequest";
import { useState, useEffect, useContext, useRef } from "react";
import { IoIosOptions } from "react-icons/io";

import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";


export function Header({plates}) {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const { plateRequest } = useContext(PlateContext);
  const [ countPlate, setCountPlate] = useState([]);
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  const [ optionsIsOpen, setOptionsIsOpen] = useState(false);
  const selectRef = useRef(null);
  const [ lightMode, setLightMode] = useState("dark");

  const verifyAdminRole = user.role === USER_ROLE.ADMIN;

  const messageToAdminAccess = verifyAdminRole ? "Novo Prato" : `Pedidos (${countPlate ? countPlate.length : 0})`;

  function handleOutsideClick(event) {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setOptionsIsOpen(false);
    }
  }

  function handleLightMode(mode){
    if(mode === "light"){
      setLightMode(mode)
    }else{
      setLightMode(mode)
    }
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
        {verifyAdminRole ? <FoodExplorerAdmin/> : <FoodExplorer />}
      </Logo>

      <InputSearch plates={plates}/>

      <MenuOptions $isopen={optionsIsOpen} >
        <IoIosOptions size={32} onClick={()=> setOptionsIsOpen(true)}/>
        <div className="options-header" ref={selectRef}>
          <p onClick={()=> navigate("/")}>Favoritos</p>
          <p onClick={()=> navigate("/order-history")}>Histórico de pedido</p>
          <p onClick={()=> navigate("/")}>Perfil</p>
          <div className="light-mode">
            {lightMode === "light" ? <MdLightMode size={32} onClick={()=>handleLightMode("dark")}/>
            : <MdDarkMode size={32} onClick={()=> handleLightMode("light")}/>}
          </div>
        </div>
      </MenuOptions>

      <Requests>
        <Button 
          title={messageToAdminAccess} icon={verifyAdminRole ? null : PiReceipt} 
          onClick={verifyAdminRole ? () => navigate("/newplate") : () => navigate("/cart")}
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
