import { useState, useEffect, useRef } from "react";
import { Container, Options, Placeholder } from "./style";
import { IoIosArrowDown } from "react-icons/io";

export function Select({ handleCategory, placeholder, value, category, itemOption, ...rest }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(placeholder);
  const selectRef = useRef(null);
  // const itemOption = ["Refeição", "Sobremesas", "Bebidas"];

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
      <Placeholder $isOpen={isOpen}>
        <div onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
          <button {...rest}>{category ? category : selectValue}</button>
          <span>
            <IoIosArrowDown size={28} />
          </span>
        </div>
        <Options $isOpen={isOpen} onClick={handleSelectOption}>
          {itemOption &&
            itemOption.length > 1 &&
            itemOption.map((item) => (
              <div key={item} data-value={item} onClick={(e) => handleCategory(e.target.dataset.value)}>
                {item}
              </div>
            ))}
        </Options>
      </Placeholder>
    </Container>
  );
}
