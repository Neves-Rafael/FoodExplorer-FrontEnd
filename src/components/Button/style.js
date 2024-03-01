import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  height: 4.8rem;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  font-family: "Poppins";

  &:disabled {
    filter: brightness(0.3);
    cursor: not-allowed;
  }
`;
