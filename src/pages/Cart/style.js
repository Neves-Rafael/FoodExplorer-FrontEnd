import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  main {
    max-width: 110rem;
    margin: 6rem 2rem;
    padding-bottom: 10rem;
    min-height: calc(100dvh - 30rem);

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
      margin: 6rem;
    }

    @media (min-width: 1200px) {
      margin: 6rem auto;
    }

    h2 {
      font-family: "Poppins";
      font-size: 2.4rem;
      font-weight: 500;
      margin-bottom: 4rem;

      @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
        margin-bottom: 6rem;
      }
      @media (min-width: 1200px) {
        font-size: 3.2rem;
      }
    }

    h3 {
      font-family: "Poppins";
      margin-top: 4rem;
      margin-bottom: 4rem;
      font-size: 2rem;
      text-align: center;
      font-weight: 500;

      @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
        margin-top: 8rem;
        margin-bottom: 4rem;
      }
    }
  }
`;

export const RequestList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 4rem;

  p {
    font-family: "Poppins";
    font-size: 2rem;
  }

  img {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 100%;
  }

  .plate-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    max-width: 30rem;
  }

  .plate-info {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;

    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .tags-plate {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .delete-plate-request {
    background: none;
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  > button {
    width: 22rem;
  }

  > button:nth-child(1),
  button:nth-child(2) {
    width: 10rem;
    font-size: 1.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
`;
