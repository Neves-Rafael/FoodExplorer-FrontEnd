import styled from "styled-components";

export const Container = styled.div`
  main{
    min-height: calc(100dvh - 200px);
    max-width: 120rem;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 4rem;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  border-radius: 2rem;
  padding: 4rem;
  max-width: 30rem;
  height: 40rem;

  .user-info{
    text-align: center;

    p:nth-child(1){
      color: ${({theme}) => theme.COLORS.LIGHT_300 };
    }

    p:nth-child(2){
      color: ${({theme}) => theme.COLORS.LIGHT_500 };
      font-size: 1.6rem;
    }
  }

  .avatar-animate{
    width: 40rem;
    margin-top: -8rem;
    margin-bottom: -4rem;
  }

  p{
    font-family: "Poppins";
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  border-radius: 2rem;
  padding: 4rem;
  width: 100%;
  height: 40rem;

  div input {
    background-color: ${({theme}) => theme.COLORS.DARK_500};
    border-radius: .8rem;
  }

  div{
    min-width: 48%;
  }

  .button-container{
    display: flex;
    gap: 2rem;
    width: 100%;
  }

  .update-button{
    opacity: ${({$isEnable, theme}) => $isEnable ? "1" : "0.5"};
    cursor: ${({$isEnable}) => $isEnable ? "pointer" : "not-allowed"};

    &:hover{
      filter: ${({$isEnable}) => $isEnable ? "brightness(1.3)" : "brightness(1)"};
    }
  }
`;