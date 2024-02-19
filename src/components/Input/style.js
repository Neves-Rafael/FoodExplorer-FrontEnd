import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  width: 100%;
  height: 4.8rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  svg {
    margin: 0 0 0 1rem;
  }

  input {
    width: 100%;
    height: 100%;
    padding-left: 1.4rem;
    background: none;
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;
