import styled from "styled-components";

export const Container = styled.div`
  width: 100%;


  .payment-container{
    width: 110rem;
    display: flex;
    height: 100dvh;
    margin: auto;
    padding-top: 4rem;

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
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 5rem;


  .plate-info{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 2rem;

    div{
      display: flex;
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

  button{
    background: none;
    text-align: start;
    font-family: Roboto;
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.TOMATO_400}
  }

  img{
    width: 7rem;
  }
`;

export const StatusPayment = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 5rem;


  .select-payment{
    width: 500px;
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

    button + button{
      border-left: 2px solid gray;
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