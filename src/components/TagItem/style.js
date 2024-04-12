import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.LIGHT_500};

  border: ${({ $isNew }) => ($isNew ? `1px dashed gray` : "none")};

  display: flex;
  align-items: center;
  border-radius: 8px;
  padding-right: 6px;
  gap: 6px;

  @media (min-width: 425px) {
    max-width: 15rem;
  }

  button {
    background: none;
    border: none;
    display: flex;

    path {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  input {
    width: 100%;
    height: 3rem;
    background: transparent;
    border: none;
    font-size: 1.4rem;
    padding-left: 6px;
    text-align: center;
  }
`;
