import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import { Container, Options, Placeholder } from "./style";

export function Select({
  handleCategory,
  placeholder,
  category,
  itemOption,
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(placeholder);
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

  const verifyStatusOrder = (status) => {
    let colorStatus = "";
    switch (status) {
      case "cancelado":
        colorStatus = "red";
        break;
      case "processando":
        colorStatus = "light-blue";
        break;
      case "finalizado":
        colorStatus = "green";
        break;
      case "pendente":
        colorStatus = "orange";
        break;
      case "cozinha":
        colorStatus = "blue";
        break;
    }

    return colorStatus;
  };

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
          <button {...rest}>
            <span className={verifyStatusOrder(selectValue)} />
            {selectValue ? selectValue : category}
          </button>
          <span>
            <IoIosArrowDown size={28} />
          </span>
        </div>
        <Options $isOpen={isOpen} onClick={handleSelectOption}>
          {itemOption &&
            itemOption.length > 1 &&
            itemOption.map((item, index) => (
              <div
                key={index}
                data-value={item}
                onClick={(e) => handleCategory(e.target.dataset.value)}>
                <>
                  <span className={verifyStatusOrder(item)} />
                  {item}
                </>
              </div>
            ))}
        </Options>
      </Placeholder>
    </Container>
  );
}
