import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  main{
    min-height: calc(100dvh - 200px);

    h2{
      font-family: "Poppins";
      font-weight: 500;
      font-size: 3.2rem;
      margin: 2rem 2rem 4rem;
    }

    button{
      font-family: "Poppins";
      font-weight: 500;
      font-size: 2rem;
      margin: 6rem 2rem;
      background: none;
      display: flex;
      align-items: center;
      gap: 1rem
    }
  }
`;

export const MobileContent =  styled.div`
  margin: 2rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media(min-width: 768px){
    display: none;
  }

  .request-content{
    border: 2px solid darkgray;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 30rem;
    cursor: pointer;
    transition: all ease-in-out 200ms;

    &:hover{
      background-color: darkslategrey;
    }
  }

  p, span{
    font-size: 1.4rem;
  }

  .data-info{
    display: flex;
    justify-content: space-between;
  }

  .plate-info{
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    text-transform: capitalize;
  }

  .color-status{
    display: flex;
    align-items: center;
    gap: .8rem;
    text-transform: capitalize;

    span{
      height: .8rem;
      width: .8rem;
      border-radius: 100%;
    }
    .red{
      background-color: red;
    }

    .green{
      background-color: green;
    }

    .blue{
      background-color: blueviolet;
    }

    .orange{
      background-color: orange;
    }

    .light-blue{
      background-color: lightseagreen;
    }
  }
`;

export const DesktopContent = styled.div`

`;