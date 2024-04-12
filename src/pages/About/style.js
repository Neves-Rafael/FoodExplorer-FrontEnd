import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .text-info {
    font-size: 1.2rem;
    text-align: end;
    font-family: "Poppins";
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }

  main {
    min-height: calc(100dvh - 20rem);
    padding: 4rem 2rem;
    max-width: 80rem;
    margin: auto;

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
      padding: 8rem 2rem;
    }
  }
`;

export const AboutUs = styled.div`
  text-align: center;
  position: relative;

  h3,
  p,
  span {
    font-family: "Poppins";
  }

  h3 {
    font-weight: 600;
    font-size: 2rem;
    text-align: start;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.COLORS.CARROT_100};
  }

  .title-text,
  span {
    font-size: 2.6rem;
    margin-bottom: 4rem;
  }

  span {
    text-decoration-line: underline;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    cursor: pointer;
  }

  .description-text {
    word-spacing: 4px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-bottom: 4rem;
  }

  img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    margin-bottom: 6rem;

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
      height: 40rem;
    }
  }
`;

export const OpenHour = styled.div`
  text-align: center;
  h3,
  p {
    font-family: "Poppins";
  }

  span {
    color: ${({ theme }) => theme.COLORS.CARROT_100};
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
  }

  h3 {
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  .hour-schema {
    margin: 2rem 0;
  }

  .open-hour div {
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 44rem;
  }
`;

export const SocialMedia = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 8px;
  max-width: 44rem;
  padding: 2rem;
  margin: 6rem auto;
  text-align: center;

  h3 {
    font-weight: 500;
    font-family: "Poppins";
  }

  .social {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;

    svg path {
      transition: all ease-in-out 300ms;
    }

    svg:nth-child(1):hover {
      cursor: pointer;
      path {
        color: steelblue;
      }
    }

    svg:nth-child(2):hover {
      cursor: pointer;
      path {
        color: blueviolet;
      }
    }

    svg:nth-child(3):hover {
      cursor: pointer;
      path {
        color: burlywood;
      }
    }

    svg:nth-child(4):hover {
      cursor: pointer;
      path {
        color: chartreuse;
      }
    }
  }
`;
