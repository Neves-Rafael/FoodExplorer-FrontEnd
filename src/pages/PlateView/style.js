import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .plate-image {
    width: 30rem;
    height: 30rem;
    object-fit: cover;
    border-radius: 50%;
  }

  h3 {
    font-size: 3rem;
    font-family: "Poppins";
    font-weight: 500;
    margin: 2rem 0;
  }

  p {
    text-align: center;
    width: 30rem;
    font-family: "Poppins";
  }

  .back-button {
    margin: 4rem 0 2rem 0;
    padding-left: 15%;
    font-size: 2.4rem;
    text-align: start;
    width: 100%;
  }

  .confirm-order {
    width: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-bottom: 5rem;
  }

  .tags {
    width: 33rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 2.4rem 0 4rem;
  }
`;
