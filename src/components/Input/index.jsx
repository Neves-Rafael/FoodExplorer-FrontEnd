import { Container } from "./style";
import { useEffect, useState } from "react";

export function Input({ placeholder, icon: Icon, onChange, value, ...rest }) {
  const [valueState, setValueState] = useState("");

  useEffect(() => {
    if (value) {
      setValueState(value);
    } else {
      setValueState("");
    }
  }, [value]);

  return (
    <Container>
      {Icon && <Icon size={32} />}
      <input
        placeholder={placeholder}
        onChange={onChange}
        value={valueState}
        {...rest}
      />
    </Container>
  );
}
