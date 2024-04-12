import styled from "styled-components";

export const Container = styled.section`
  margin: 6rem 0 4rem 2rem;
  position: relative;
  max-width: 110rem;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    margin: 6rem 8rem 10rem 8rem;

    &::before {
      left: -3px;
      top: 0;
      z-index: 1;
      background: rgb(0, 10, 15);
      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 1) 30%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &::after {
      right: -3px;
      top: 0;
      z-index: 0;
      background: rgb(0, 10, 15);
      background: linear-gradient(
        270deg,
        rgba(0, 10, 15, 1) 30%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &::before,
    &::after {
      content: "";
      width: 20rem;
      height: 100%;
      position: absolute;
      display: block;
    }
  }

  @media (min-width: 1250px) {
    margin: 6rem auto;
  }

  > p:first-child {
    font-size: 1.8rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin-bottom: 2.4rem;
    position: relative;
    z-index: 3;

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
      font-size: 3.2rem;
    }
  }

  #children {
    padding: 0;

    > ul {
      bottom: -3rem;
    }
  }
`;
