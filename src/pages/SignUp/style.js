import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100dvh;
  max-width: 100%;

  @media (min-width: 1024px) {
    justify-content: space-around;
    padding: 0 5%;
  }

  @media (min-width: 1440px) {
    justify-content: center;
    gap: 260px;
  }
`;

export const Logo = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  > div {
    width: 100%;
    > p {
      margin-bottom: 0.4rem;
    }
  }

  @media (min-width: 320px) {
    width: 100%;
    padding: 4rem 2rem;

    div:nth-child(1) {
      > p {
        font-size: 3.6rem;
      }
    }
  }

  @media (min-width: 425px) {
    max-width: 42rem;
  }

  @media (min-width: 768px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    max-width: 50rem;
    padding: 6rem;
    border-radius: 1.6rem;

    div:nth-child(1) {
      display: flex;
      p {
        font-size: 4.4rem;
      }
    }
  }

  @media (min-width: 1024px) {
    div:nth-child(1) {
      display: none;
    }
  }
`;

export const MakeLogin = styled.p`
  font-size: 4rem;
  font-family: "Poppins";
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const MakeAccount = styled.p`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`;
