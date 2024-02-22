import { useState, useEffect, useRef } from "react";
import { Container, Options, Placeholder } from "./style";
import { IoIosArrowDown } from "react-icons/io";

export function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("Exemple: Refeição");
  const selectRef = useRef(null);

  function handleSelectOption(event) {
    const optionValue = event.target.dataset.value;
    if (!optionValue) {
      return;
    }
    setSelectValue(optionValue);
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

  return (
    <Container ref={selectRef}>
      <Placeholder>
        <div onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
          <button>{selectValue}</button>
          <IoIosArrowDown size={28} />
        </div>
        <Options $isOpen={isOpen} onClick={handleSelectOption}>
          <ul data-value={"Opção 1"}>Opção 1</ul>
          <ul data-value={"Opção 2"}>Opção 2</ul>
          <ul data-value={"Opção 3"}>Opção 3</ul>
        </Options>
      </Placeholder>
    </Container>
  );
}
