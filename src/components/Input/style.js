import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  width: 100%;
  height: 4.8rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    margin: 0 0 0 1rem;
  }

  input {
    width: 100%;
    height: 100%;
    padding-left: 6rem;
    background: none;
  }

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;
