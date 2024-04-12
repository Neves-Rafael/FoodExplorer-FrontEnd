import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.LIGHT_700};

  border: ${({ $isNew }) => ($isNew ? `1px dashed gray` : "none")};

  display: flex;
  gap: 1rem;
  align-items: center;
  border-radius: 8px;
  padding: 0 1rem;

  button {
    background: none;
    border: none;
    display: flex;

    path {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  > input {
    width: 13rem;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    height: 3rem;
    background: transparent;
    border: none;
    font-size: 1.4rem;
    margin-left: -1rem;
    padding: 1rem;
  }

  > div {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    height: 3rem;
    font-size: 1.4rem;
  }
`;
