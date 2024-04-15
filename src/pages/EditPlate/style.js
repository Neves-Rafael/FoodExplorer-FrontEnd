import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100dvh - 20rem);
`;

export const Section = styled.section`
  max-width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  padding-bottom: 10rem;

  textarea {
    width: 100%;
    padding: 1rem;
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
    margin-top: 2.4rem;

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.SMALL_G}) {
      width: 20rem;
    }
  }

  @media (min-width: 450px) {
    max-width: 400px;
  }

  @media (min-width: 1120px) {
    max-width: 1024px;
    gap: 3.2rem;
  }
`;

export const FirstGroupInfo = styled.div`
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

export const SecondGroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  margin-top: 5rem;

  > div {
    width: 100%;
  }

  p {
    margin-bottom: 1.6rem;
  }

  @media (min-width: 1120px) {
    flex-direction: row;
    margin-top: 0;

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
    > svg {
      width: 2.2rem;
    }
    font-weight: 600;
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
  padding: 1rem;
  min-height: 4.8rem;
  border-radius: 8px;
  gap: 1rem;
  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.DARK_900};
`;

export const UploadImage = styled.label`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  transition: all 300ms ease-in-out;

  &:hover {
    filter: brightness(1.5);
  }

  input {
    display: none;
  }

  svg {
    margin-right: 1rem;
  }
`;

export const ButtonAction = styled.div`
  display: flex;
  justify-content: end;
  gap: 4rem;

  button:nth-child(1) {
    background-color: ${({ theme }) => theme.COLORS.DARK_100};
  }

  @media (max-width: 1120px) {
    gap: 2rem;
    flex-direction: column;
  }

  button {
    margin-top: 0;

    @media (min-width: 1120px) {
      width: 20rem;
      margin-top: 2.4rem;
    }
  }
`;
