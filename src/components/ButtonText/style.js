import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  background: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.6rem;
`;
