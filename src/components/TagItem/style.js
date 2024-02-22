import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.DARK_900};

  border: ${({ $isNew }) => ($isNew ? `1px dashed red` : "none")};
  margin-bottom: 8px;
  padding-right: 16px;

  display: flex;
  align-items: center;

  button {
    background: none;
    border: none;
  }

  input {
    height: 4.8rem;
    width: 100%;

    padding: 12px;

    background: transparent;
    border: none;

    &::placeholder {
      color: blue;
    }
  }
`;

export const Ingredients = styled.div`
  display: flex;
  flex-direction: row;
`;
