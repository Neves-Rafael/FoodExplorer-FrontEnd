import styled from "styled-components";

export const Container = styled.section`
  margin-top: 6rem;
  margin-left: 2rem;
  max-width: 1000px;
  overflow: hidden;
  margin-left: 5%;
  margin-right: 5%;
  position: relative;

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

export const Fov = styled.div`
  /* background: rgb(0, 10, 15);
  background: linear-gradient(
    90deg,
    rgba(0, 10, 15, 1) 8%,
    rgba(255, 255, 255, 0) 28%,
    rgba(255, 255, 255, 0) 72%,
    rgba(0, 10, 15, 1) 92%
  );

  z-index: 1;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0; */
`;
