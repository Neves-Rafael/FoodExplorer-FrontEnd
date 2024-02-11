import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100dvh;
  width: 80%;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    > div {
      width: 100%;
      > p {
        margin-bottom: 0.8rem;
      }
    }
  }
`;
