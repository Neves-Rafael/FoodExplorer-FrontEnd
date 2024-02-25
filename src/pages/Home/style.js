import styled from "styled-components";

export const Container = styled.div`
  height: 100dvh;
  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 120px auto;

  > main {
    grid-area: content;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  .smooth {
    background: rgb(0, 10, 15);
    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 1) 8%,
      rgba(255, 255, 255, 0) 28%,
      rgba(255, 255, 255, 0) 72%,
      rgba(0, 10, 15, 1) 92%
    );

    inset: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &::before {
      content: "";
      width: 15rem;
      height: 100%;
      position: absolute;
      left: 0;
      z-index: 2;
      background: rgb(0, 10, 15);
      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 1) 30%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &::after {
      content: "";
      width: 15rem;
      height: 100%;
      position: absolute;
      right: 0;
      z-index: 2;
      background: rgb(0, 10, 15);
      background: linear-gradient(
        270deg,
        rgba(0, 10, 15, 1) 30%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    .swiper-button-next,
    .swiper-button-prev {
      width: 5rem;
      display: none;

      @media (min-width: 1024px) {
        display: block;
      }
    }
  }
`;

export const Banner = styled.div`
  height: 12rem;
  background: linear-gradient(
    180deg,
    rgba(9, 30, 38, 1) 0%,
    rgba(0, 19, 28, 1) 100%
  );

  width: 90%;
  align-items: center;
  border-radius: 0.4rem;
  margin-top: 4.4rem;
  margin-left: 6%;
  display: flex;
  position: relative;

  > img {
    position: absolute;
    width: 25rem;
    left: -2.8rem;
    bottom: 0;
  }

  @media (max-width: 450px) {
    margin: auto;
    flex-direction: column-reverse;

    align-items: center;
    margin-top: 4.4rem;
    height: 25rem;

    h3 {
      font-size: 5rem;
    }

    > img {
      position: static;
      width: 25rem;
    }
  }

  @media (min-width: 450px) {
    max-width: 500px;
    margin: auto;
    flex-direction: row;

    align-items: center;
    margin-top: 4.4rem;
    height: 12rem;

    > img {
      position: absolute;
      width: 25rem;
    }
  }

  @media (min-width: 768px) {
    max-width: 75%;
    margin: auto;
    flex-direction: row;

    align-items: center;
    margin-top: 6rem;
    height: 16rem;

    > img {
      position: absolute;
      width: 30rem;
    }
  }

  @media (min-width: 1024px) {
    max-width: 100rem;
    height: 26rem;
    margin: auto;
    margin-top: 10rem;

    h3 {
      font-size: 5rem;
    }

    > img {
      width: 50rem;
      left: -6rem;
    }
  }
`;

export const BannerText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h3,
  p {
    font-family: "Poppins";
    line-height: 140%;
  }

  > h3 {
    font-size: 1.9rem;
    font-weight: 600;
  }

  > p {
    font-size: 1.2rem;
  }

  @media (max-width: 450px) {
    justify-content: center;
    text-align: center;
    margin-top: 2rem;

    p {
      padding: 0.4rem 2rem;
    }
  }

  @media (min-width: 450px) {
    margin-top: 2rem;
    display: flex;
    margin: auto;
    padding-right: 1rem;

    p {
      align-self: end;
      width: 20rem;
      padding: 0;
    }

    h3 {
      align-self: flex-end;
    }
  }

  @media (min-width: 768px) {
    margin-top: 2rem;
    display: flex;
    margin: auto;
    padding-right: 2rem;

    p {
      align-self: end;
      width: auto;
      padding: 0;
    }

    h3 {
      font-size: 3.3rem;
      align-self: flex-end;
    }
  }

  @media (min-width: 1024px) {
    width: auto;
    margin-right: 5rem;
    h3 {
      font-size: 4rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;
