import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .payment-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    height: calc(100dvh - 194px); // 194px height header + footer
    margin: auto;
    padding: 4rem 2rem;
    align-items: center;
    margin-bottom: 10rem;

    @media(min-width: 768px){
      padding: 4rem 6rem;
    }

    @media(min-width: 1024px){
      flex-direction: row;
      max-width: 110rem;
      align-items: start;
      margin-bottom: 0rem;
    }

    @media(min-width: 1200px){
      padding: 4rem 0rem;
    }



    p, h2, h3{
    font-family: "Poppins";
    }

    h2{
      font-size: 3.2rem;
      font-weight: 500;
    }

    h3{
      font-size: 2rem;
      font-weight: 500;
    }
  }
`;

export const RequestList = styled.div`
  width: auto;
  display: ${({ $isenable }) => $isenable === "enable" ? "none" : "flex"};
  flex-direction: column;
  gap: 5rem;
  justify-content: center;

  @media(min-width: 1024px){
    width: 50%;
    align-items: start;
    display: flex;
  }

  .plate-info{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 2rem;

    div{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;

      p:nth-child(3){
        color: darkgray;
        font-size: 1.6rem;
        font-family: "Roboto";
      }
    }

    p{
      font-size: 2rem;
    }
  }

  .plate-content{
    display: flex;
    align-items: center;
  }

  button:nth-child(2){
    background: none;
    text-align: start;
    font-family: Roboto;
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.TOMATO_400}
  }

  button:nth-child(4){
    width: 20rem;
    align-self: flex-end;
    margin-top: 10rem;

    @media(min-width: 1024px){
      display: none;
    }
  }

  img{
    width: 7rem;
  }
`;

export const StatusPayment = styled.div`
  width: 100%;
  display: ${({ $isenable }) => $isenable === "enable" ? "flex" : "none"};
  flex-direction: column;
  justify-content: center;
  gap: 5rem;

  @media(min-width: 550px){
    width: 50rem;
  }

  @media(min-width: 1024px){
    display: flex;
    width: 55rem;

    button {
      display: none;
    }
  }

  .select-payment{
    max-width: 55rem;
    border: 2px solid gray;
    border-radius: 8px;

    div{
      display: flex;
    }

    button{
      width: 50%;
      background: none;
      padding: 2rem 0;
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      border-bottom: 2px solid gray;
      transition: all 300ms ease-in-out;
       
      &:hover{
        background-color: rgba(255, 255, 255, 0.6);
        filter: brightness(1);
      }
    }

    button:nth-child(1){
      border-top-left-radius: 6px;
    }

    button:nth-child(2){
      border-top-right-radius: 6px;
    }

    button + button{
      border-left: 2px solid gray;
    }

    p{
      text-align: center;
      margin-bottom: 4rem;
    }

    .method-select{
      background-color: ${({theme}) => theme.COLORS.LIGHT_700};
    }
  }

  img{
    width: 25rem;
    height: 25rem;
    object-fit: cover;
    display: flex;
    margin: 4rem auto;
  }
`;

export const CreditPayment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  gap: 4rem;

  @media(min-width: 550px){
    padding: 6rem;
  }

  >div{
    width: 100%;
  }

  >div:nth-child(2){
    display: flex;
    gap: 2rem;

    div{
      width: 100%;
    }
  }

  #finish-payment{
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    width: 100%;
    border: none;
    padding: 3rem 0;

    &:hover{
      filter: brightness(1.4);
    }
  }
`;