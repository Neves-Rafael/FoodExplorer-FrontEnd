import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
`;

export const Section = styled.section`
  max-width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;
  padding-bottom: 10rem;

  textarea {
    width: 100%;
    resize: none;
    border-radius: 0.8rem;
    border: none;
    height: 20rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  p {
    margin-bottom: 1.6rem;
  }

  button:nth-child(4) {
    align-self: end;
    width: 172px;
    margin-top: 2.4rem;
  }

  @media (min-width: 450px) {
    max-width: 400px;
  }

  @media (min-width: 1120px) {
    max-width: 1024px;
  }
`;

export const Line1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;

  p {
    margin-bottom: 1.6rem;
  }

  @media (min-width: 1120px) {
    flex-direction: row;

    > div {
      width: 100%;
    }

    > div:nth-child(1) {
      max-width: 25%;
    }

    > div:nth-child(3) {
      max-width: 35%;
    }
  }
`;

export const Line2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  margin-top: 2rem;

  > div {
    width: 100%;
  }

  p {
    margin-bottom: 1.6rem;
  }

  @media (min-width: 1120px) {
    flex-direction: row;

    > div {
      width: 100%;
    }

    > div:nth-child(2) {
      max-width: 20%;
    }
  }
`;

export const Titles = styled.div`
  font-family: "Poppins";
  max-width: 90%;
  margin: 4rem auto 3rem;

  button {
    font-size: 2.4rem;
    font-weight: 700;
    font-family: "Poppins";
    margin-bottom: 2.4rem;
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 500;
    font-family: "Poppins";
  }

  @media (min-width: 450px) {
    max-width: 400px;
  }
  @media (min-width: 1120px) {
    max-width: 1024px;
  }
`;

export const Ingredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
  min-height: 4.8rem;
  border-radius: 8px;
  gap: 1rem;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.DARK_900};
`;
