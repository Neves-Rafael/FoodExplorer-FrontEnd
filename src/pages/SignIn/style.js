import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  min-height: 100dvh;
  max-width: 100%;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    justify-content: space-around;
    padding: 0 5%;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE_G}) {
    justify-content: center;
    gap: 20rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -10rem;
  width: 100%;
  padding: 4rem 1.6rem;

  .loginForm {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    margin: 7.3rem 0 3.2rem 0;

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.SMALL_M}) {
      max-width: 32rem;
    }

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
      margin: 3.2rem 0;
      max-width: 100%;
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    max-width: 50rem;
    padding: 6rem;
    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    margin-top: 0;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    > div:nth-child(2) {
      display: none;
    }
  }
`;

export const MakeLogin = styled.p`
  font-size: 4rem;
  font-family: "Poppins";
  display: none;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: block;
  }
`;

export const MakeAccount = styled.p`
  cursor: pointer;
  font-family: "Poppins";
  font-size: 1.4rem;

  &:hover {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`;

export const Logo = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 30rem;
  }
`;
