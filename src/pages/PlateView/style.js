import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100dvh - 20rem);
  position: relative;

  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 12rem auto;
`;

export const Main = styled.main`
  display: grid;
  grid-area: content;
  justify-content: center;
  position: relative;
  padding: 8rem 1rem;
  margin-bottom: 5rem;

  img {
    margin: auto;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.SMALL_G}) {
    padding: 6rem 0;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: flex;
    max-width: 1100px;
    align-items: center;
    gap: 5rem;
    width: 100%;
    padding: 10rem 4rem;
    min-height: calc(100dvh - 20rem);
    margin: auto;
  }

  @media (min-width: 1160px) {
    padding: 10rem 0;
  }
`;

export const PlateImage = styled.img`
  display: flex;
  width: 25rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 50%;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.SMALL_G}) {
    width: 30rem;
    height: 30rem;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    width: 39rem;
    height: 39rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2.4rem 0 4rem;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    width: auto;
    justify-content: flex-start;
  }
`;

export const ConfirmOrder = styled.div`
  width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: auto;

  button {
    max-width: 20rem;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    justify-content: flex-start;
    margin: 0;
  }
`;

export const BackButton = styled.div`
  position: absolute;
  top: 2rem;
  padding-left: 10%;
  font-size: 2.4rem;
  text-align: start;
  width: 100%;

  button {
    font-family: "Poppins";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 33.6px */
  }
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.SMALL_G}) {
    padding: 0 2rem;
    max-width: 60rem;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    padding: 0 0rem;
    max-width: 100rem;
    align-items: start;
  }

  h3 {
    font-size: 3rem;
    font-family: "Poppins";
    font-weight: 500;
    margin: 2rem 0 2rem 0;
    text-align: center;
    text-transform: capitalize;

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
      text-align: start;
      font-size: 4rem;
    }
  }

  p {
    text-align: center;
    font-family: "Poppins";

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
      width: 100%;
      font-size: 2.2rem;
      text-align: start;
    }
  }
`;
