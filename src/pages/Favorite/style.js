import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  main{
    min-height: calc(100dvh - 200px);
    max-width: 120rem;
    margin: 6rem 2rem;

    @media(min-width: 475px){
      margin: 6rem 4rem;
    }

    @media(min-width: 1260px){
      margin: 6rem auto;
    }
  }

  .favorites-content{
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    justify-content: space-around;
  }
`;

export const Plate = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  img{
    width: 10rem;
  }

  h3{
    font-family: "Poppins";
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: .5rem;
  }

  p{
    font-size: 1.2rem;
    line-height: 160%;
    color: ${({theme}) => theme.COLORS.TOMATO_400 }
  }

`;