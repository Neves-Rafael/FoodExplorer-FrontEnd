import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100dvh;
  max-width: 80%;

  .desktop-logo {
    display: none;
  }

  .desktop-text {
    font-size: 4rem;
    font-family: "Poppins";
    display: none;
  }

  @media (min-width: 550px) {
    justify-content: space-evenly;
    .desktop-text {
      display: block;
    }
    div:nth-child(1) {
      display: flex;
    }
  }

  > .container-login {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.4rem;

    @media (min-width: 550px) {
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      max-width: 50rem;
      padding: 6rem;
      border-radius: 1.6rem;
      div:nth-child(1) {
        display: none;
      }
    }

    > div {
      width: 100%;
      > p {
        margin-bottom: 0.8rem;
      }
    }
  }
`;
