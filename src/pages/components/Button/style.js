import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins";
`;
