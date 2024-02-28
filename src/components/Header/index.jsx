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
import {Container, MenuHamburger, Logout, SearchBar, OrderCount, Logo, Requests, SearchResult} from "./style";

import { USER_ROLE } from "../../utils/roles"
import { useNavigate } from "react-router-dom";
import { PlateContext } from "../../hooks/plateRequest";
import { useState, useEffect, useContext, useRef } from "react";

export function Header({plates}) {
  const selectRef = useRef(null);
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const { plateRequest, updateRequest } = useContext(PlateContext);

  const [ isOpen, setIsOpen ] = useState(false);
  const [ allPlates, setAllPlates ] = useState([]);
  const [ inputSearch, setInputSearch ] = useState("");
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  const [ platesAndIngredients, setPlateAndIngredients ] = useState([]);

  const verifyAdminRole = user.role === USER_ROLE.ADMIN;

  const messageToAdminAccess = verifyAdminRole ? "Novo Prato" : `Pedidos (${plateRequest.length})`;

  function handleOutsideClick(event) {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  function allPlatesResult(){
    setAllPlates(plates())
    setIsOpen(true)
  }

  useEffect(() => {
    const filteredPlatesBySearch = allPlates.filter(plate => plate.name.includes(inputSearch))

    const filteredPlatesByIngredients = allPlates.filter(plate => {
        return plate.ingredients.some(ingredient => {
          return ingredient.name.includes(inputSearch)
      })
    })

    console.log(platesAndIngredients)

    setPlateAndIngredients([...filteredPlatesBySearch, ...filteredPlatesByIngredients])
  }, [inputSearch])

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

      <SearchBar onClick={allPlatesResult} ref={selectRef}>
        <Input
          onChange={(e) => setInputSearch(e.target.value) }
          placeholder={"Busque por pratos ou ingredients"}
          icon={IoSearchOutline}
        />

        <SearchResult $isOpen={isOpen} >
          {platesAndIngredients && 
            platesAndIngredients.map(item => (
              <p onClick={() => navigate(`/plateview/${item.id}`)} >{item.name}</p>
          ))}
        </SearchResult>
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

      <SideMenu menuIsOpen={menuIsOpen} menuIsClose={() => setMenuIsOpen(false)}/>
    </Container>
  );
}
