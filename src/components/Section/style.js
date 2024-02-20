import styled from "styled-components";

export const Container = styled.section`
  margin-top: 6rem;
  margin-left: 2rem;
  max-width: 1000px;
  overflow: hidden;
  margin-left: 5%;
  margin-right: 5%;

  p:first-child {
    font-size: 1.8rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin-bottom: 2.4rem;
  }

  @media (min-width: 1100px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
