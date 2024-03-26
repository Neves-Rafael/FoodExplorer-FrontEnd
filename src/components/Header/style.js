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


  &:hover{
    path{
      transition: all 300ms ease-in-out;
      color: ${({theme}) => theme.COLORS.TOMATO_200}
    }
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

export const MenuOptions = styled.div`
  position: relative;
  display: none;

  @media(min-width:1024px ){
      display: flex;
  }

  .options-header{
    display: ${({$isopen}) => $isopen ? "flex": "none"};
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    width: 30rem;
    position: absolute;
    justify-content: center;
    left: -13rem;
    top: 6rem;
    z-index: 99;
    background-color: ${({theme}) => theme.COLORS.LIGHT_700};
    border-radius: 8px;
    padding: 1rem 0;

    p{
      font-family: "Poppins";
      cursor: pointer;
      transition: all ease-in-out 200ms;

      &:hover{
        color: ${({theme}) => theme.COLORS.CARROT_100}
      }
    }

    path:hover{
      cursor: pointer;
      color: black;
      transition: all ease-in 200ms;
    }

    p + p, .light-mode{
      width: 100%;
      text-align: center;
      padding: 0 4rem;

      &:before{
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: darkgray;
        opacity: .3;
        margin-bottom: 1rem;
      }
    }
  }
`;