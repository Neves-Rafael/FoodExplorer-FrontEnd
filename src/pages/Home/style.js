import styled from "styled-components";

export const Container = styled.div`
  min-height: 100dvh;
  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 12rem auto;

  > main {
    grid-area: content;
    overflow-y: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background: none;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
      border-radius: 2rem;
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
    left: -2.8rem;
    bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.MEDIA_QUERY.SMALL_G}) {
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
      object-fit: cover;
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.SMALL_G}) {
    max-width: 85%;
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

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    max-width: 80%;
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

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    max-width: 110rem;
    height: 26rem;
    margin: auto;
    margin-top: 10rem;
    background-color: red;

    > img {
      width: 50rem;
      left: -6rem;
    }
  }
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;

  h3,
  p {
    font-family: "Poppins";
    line-height: 140%;
  }

  > h3 {
    font-size: 1.84rem;
    font-weight: 500;
  }

  > p {
    font-size: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.MEDIA_QUERY.SMALL_G}) {
    margin-top: 2rem;
    text-align: center;

    p {
      padding: 0.4rem 2rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.SMALL_G}) {
    margin-top: 2rem;
    display: flex;
    margin: auto;
    padding-right: 1rem;
    position: absolute;
    right: 0;

    p {
      width: 20rem;
      padding: 0;
    }
  }

  @media (min-width: 550px) {
    margin-right: 2rem;

    h3 {
      font-size: 2.3rem;
    }
    p {
      width: 25.2rem;
      font-size: 1.45rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    margin-top: 2rem;
    display: flex;
    margin: auto;
    padding-right: 1.6rem;

    p {
      width: auto;
    }

    h3 {
      font-size: 4rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    width: auto;
    padding: 0;
    margin-right: 8rem;
  }
`;
