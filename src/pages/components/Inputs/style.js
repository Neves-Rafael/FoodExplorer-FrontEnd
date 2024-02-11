import styled from "styled-components";

export const Container = styled.input`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  width: 30rem;
  height: 4rem;
  border-radius: 0.8rem;
  display: flex;
  padding-left: 1.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;
