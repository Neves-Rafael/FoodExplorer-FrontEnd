import styled from "styled-components";

export const Container = styled.header`
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  align-items: end;
  justify-content: space-around;
  grid-area: header;
  padding-bottom: 2.4rem;
  
  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
    padding: 0 5rem;
  }
`;

export const MenuHamburger = styled.div`
  display: block;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: none;
  }
`;

export const Logout = styled.div`
  display: none;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: block;
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

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: none;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  
  div p {
    font-size: 2.4rem;
  }

  div img {
    width: 3rem;
  }
`;

export const Requests = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: block;
    width: 20rem;
  }
`;