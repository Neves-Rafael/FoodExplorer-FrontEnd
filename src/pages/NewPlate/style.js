import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
`;

export const Section = styled.section`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .back-to-menu {
    font-size: 2rem;
    margin-top: 3rem;
  }

  h2 {
    font-size: 4rem;
    font-family: "Poppins";
    font-weight: 500;
    margin-top: 2rem;
  }

  .image-select {
    width: 100%;
    height: 4.8rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }

  .input-create {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div p {
      margin-bottom: 1.6rem;
    }
  }

  textarea {
    width: 100%;
    resize: none;
    border-radius: 0.8rem;
    border: none;
    height: 20rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
`;
