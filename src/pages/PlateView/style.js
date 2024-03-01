import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  position: relative;

  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 120px auto;

`;

export const Main = styled.main`
  display: grid;
  grid-area: content;
  justify-content: center;
  position: relative;
  padding: 8rem 0;
  margin-bottom: 5rem;

  img {
    margin: auto;
  }

  @media (min-width: 425px) {
    padding: 6rem 0;
  }

  @media (min-width: 1024px) {
    display: flex;
    max-width: 1024px;
    align-items: center;
    gap: 5rem;
    width: 100%;
    padding: 10rem;
    height: calc(100dvh - 200px);

    margin: auto;
  }
`;

export const PlateImage = styled.img`
  background-color: aliceblue;
  display: flex;
  width: 25rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 50%;

  @media (min-width: 425px) {
    width: 30rem;
    height: 30rem;
  }

  @media (min-width: 1024px) {
    width: 39rem;
    height: 39rem;
  }
`;

export const Tags = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2.4rem 0 4rem;

  @media (min-width: 1024px) {
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

  button{
    max-width: 20rem;
  }

  @media (min-width: 1024px) {
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

  button{
    font-family: "Poppins";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 33.6px */
  }
`;

export const InfoText = styled.div`
  h3 {
    font-size: 3rem;
    font-family: "Poppins";
    font-weight: 500;
    margin: 0 0 2rem 0;
    text-align: center;

    @media (min-width: 1024px) {
      text-align: start;
      font-size: 4rem;
    }
  }

  p {
    text-align: center;
    width: 30rem;
    font-family: "Poppins";

    @media (min-width: 1024px) {
      width: 100%;
      font-size: 2.2rem;
      text-align: start;
    }
  }
`;
