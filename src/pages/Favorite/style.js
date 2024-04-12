import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  main {
    min-height: calc(100dvh - 200px);
    max-width: 120rem;
    margin: 6rem 2rem;

    @media (min-width: 475px) {
      margin: 6rem 4rem;
    }

    @media (min-width: 1260px) {
      margin: 6rem auto;
    }
  }

  h2 {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 3.2rem;
  }

  .back-button {
    background: none;
    display: flex;
    gap: 1rem;
    margin: 2rem 0 4rem 0;
  }

  .text-content {
    margin-bottom: 2rem;

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
      max-width: 120rem;
      margin: 6rem auto 2rem;
    }
  }

  .favorites-content {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
      justify-content: space-evenly;
    }
  }
`;

export const Plate = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
    object-fit: cover;
  }

  h3 {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
    cursor: pointer;
    display: inline-block;
  }
`;
