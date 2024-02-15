import styled from "styled-components";

export const Container = styled.div`
  .cardHomePage {
    height: 12rem;
    background: rgb(9, 30, 38);
    background: linear-gradient(180deg, rgba(9, 30, 38, 1) 0%, rgba(0, 19, 28, 1) 100%);

    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    border-radius: 0.4rem;
    margin-top: 4.4rem;
    margin-left: 7%;

    position: relative;

    > img {
      position: absolute;
      width: 25rem;
      left: -2.8rem;
      bottom: 0;
    }

    .cardHomePageText {
      width: 22.6rem;
      position: absolute;
      right: 0rem;

      h3,
      p {
        font-family: "Poppins";
        line-height: 140%;
      }

      > h3 {
        font-size: 1.8rem;
        font-weight: 600;
      }

      > p {
        font-size: 1.2rem;
      }

      @media (min-width: 1000px) {
        width: auto;
        margin-right: 5rem;
        h3 {
          font-size: 4rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }

    @media (min-width: 1000px) {
      max-width: 110rem;
      margin-left: auto;
      height: 26rem;
      margin-top: 10rem;

      h3 {
        font-size: 5rem;
      }

      > img {
        width: 50rem;
        left: -10rem;
      }
    }
  }
`;
