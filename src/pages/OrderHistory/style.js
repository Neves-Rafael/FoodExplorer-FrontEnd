import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  main{
    min-height: calc(100dvh - 200px);

    h2{
      font-family: "Poppins";
      font-weight: 500;
      font-size: 3.2rem;
      margin: 6rem 2rem 2rem;
    }
  }
`;

export const MobileContent =  styled.div`
  margin: 2rem;

  .request-content{
    border: 2px solid darkgray;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  p{
    font-size: 1.4rem;
  }

  .data-info{
    display: flex;
    justify-content: space-between;
  }
`;

export const DesktopContent = styled.div`

`;