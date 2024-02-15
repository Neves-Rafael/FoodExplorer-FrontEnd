import styled from "styled-components";

export const Container = styled.header`
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  grid-area: header;

  div p {
    font-size: 2rem;
  }

  div img {
    width: 2.6rem;
  }

  button {
    width: 21rem;
    display: none;
  }

  .order-counter {
    position: relative;
    span {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      padding: 0.1rem 0.6rem;
      border-radius: 100%;
      position: absolute;
      right: -0.4rem;
      top: -0.6rem;
    }
  }

  @media (min-width: 768px) {
    padding: 0 10%;
    justify-content: space-between;

    .order-counter {
      display: none;
    }

    button {
      display: block;
    }
  }
`;

export const MenuHamburger = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Logout = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const SearchBar = styled.div`
  width: 50%;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
