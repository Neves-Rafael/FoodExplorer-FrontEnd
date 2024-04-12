import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  main {
    min-height: calc(100dvh - 20rem);
    max-width: 120rem;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
      align-items: center;
      gap: 4rem;
    }

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
      flex-direction: row;
      margin: auto;
    }
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 2rem;
  padding: 4rem;
  max-width: 30rem;
  height: 40rem;
  margin-bottom: 4rem;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    margin-bottom: 0;
  }

  .user-info {
    text-align: center;

    p:nth-child(1) {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p:nth-child(2) {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1.6rem;
    }
  }

  .avatar-animate {
    width: 30rem;

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
      width: 40rem;
      margin-top: -8rem;
      margin-bottom: -4rem;
    }
  }

  p {
    font-family: "Poppins";
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 2rem;
  width: 100%;
  padding: 2rem;
  max-width: 30rem;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    height: 40rem;
    padding: 4rem;
    flex-wrap: wrap;
    flex-direction: row;
    max-width: 100%;
  }

  div input {
    background-color: ${({ theme }) => theme.COLORS.DARK_500};
    border-radius: 0.8rem;
  }

  div {
    min-width: 48%;
  }

  .button-container {
    display: flex;
    margin-top: 2rem;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
      margin-top: 0;
      flex-direction: row;
    }
  }

  .update-button {
    opacity: ${({ $isEnable, theme }) => ($isEnable ? "1" : "0.5")};
    cursor: ${({ $isEnable }) => ($isEnable ? "pointer" : "not-allowed")};

    &:hover {
      filter: ${({ $isEnable }) =>
        $isEnable ? "brightness(1.3)" : "brightness(1)"};
    }
  }
`;
