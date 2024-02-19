import styled from "styled-components";

export const Container = styled.header`
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  grid-area: header;

  @media (min-width: 1024px) {
    justify-content: center;
    gap: 5rem;
  }
`;

export const MenuHamburger = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Logout = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const SearchBar = styled.div`
  width: 40%;
  display: none;

  div input {
    &::placeholder {
      padding-left: 25%;
    }
  }

  @media (min-width: 1024px) {
    display: block;
  }

  @media (min-width: 1440px) {
    width: 58rem;
  }
`;

export const OrderCount = styled.div`
  position: relative;

  span {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    padding: 0.1rem 0.6rem;
    border-radius: 100%;
    position: absolute;
    right: -0.4rem;
    top: -0.6rem;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Logo = styled.div`
  div p {
    font-size: 2rem;
  }

  div img {
    width: 2.8rem;
  }
`;

export const Requests = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: 20rem;
  }
`;
