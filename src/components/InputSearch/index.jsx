import { Input } from "../Input";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, SearchResult } from "./style";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { PlateContext } from "../../hooks/plateRequest";

export function InputSearch() {
  const selectRef = useRef(null);
  const navigate = useNavigate();

  const { showAllPlates } = useContext(PlateContext);

  const [isOpen, setIsOpen] = useState(false);
  const [allPlates, setAllPlates] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [platesAndIngredients, setPlateAndIngredients] = useState([]);

  function allPlatesResult() {
    setAllPlates(showAllPlates);
    setIsOpen(true);
  }

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

  useEffect(() => {
    if (inputSearch.length < 1) {
      return;
    }

    const filteredPlatesBySearch = allPlates.filter((plate) => {
      return plate.name.toLowerCase().includes(inputSearch.toLowerCase());
    });

    const filteredPlatesByIngredients = allPlates.filter((plate) => {
      return plate.ingredients.some((ingredient) => {
        return ingredient.name
          .toLowerCase()
          .includes(inputSearch.toLowerCase());
      });
    });

    const allFilteredSearch = [
      ...filteredPlatesBySearch,
      ...filteredPlatesByIngredients,
    ];

    const uniqueFilteredSearch = [...new Set(allFilteredSearch)];

    setPlateAndIngredients(uniqueFilteredSearch);
  }, [inputSearch]);

  return (
    <Container onClick={allPlatesResult} ref={selectRef}>
      <Input
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        placeholder={"Busque por pratos ou ingredients"}
        icon={IoSearchOutline}
      />

      <SearchResult $isOpen={isOpen}>
        {platesAndIngredients &&
          platesAndIngredients.map((item) => (
            <p onClick={() => navigate(`/plateview/${item.id}`)} key={item.id}>
              {item.name}
            </p>
          ))}
      </SearchResult>
    </Container>
  );
}
