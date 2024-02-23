import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.LIGHT_500};

  border: ${({ $isNew }) => ($isNew ? `1px dashed gray` : "none")};

  display: flex;
  align-items: center;
  height: 3rem;
  border-radius: 8px;
  padding: 12px;
  max-width: 12.9rem;

  @media (min-width: 425px) {
    max-width: 15rem;
  }

  button {
    background: none;
    border: none;
    display: flex;
  }

  input {
    width: 100%;

    background: transparent;
    border: none;

    &::placeholder {
      color: blue;
    }
  }
`;
