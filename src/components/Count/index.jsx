import { Container } from "./style";
import { useState, useEffect } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

export function Count({ onCountChange }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count <= 0) {
      setCount(1);
    }

    if (count > 99) {
      setCount(99);
    }

    onCountChange(count);
  }, [count, onCountChange]);

  return (
    <Container>
      <FiMinusCircle onClick={() => setCount((prevCount) => prevCount - 1)} />
      <span>{count}</span>
      <FiPlusCircle onClick={() => setCount((prevCount) => prevCount + 1)} />
    </Container>
  );
}
