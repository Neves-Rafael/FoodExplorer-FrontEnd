import styled from "styled-components";

export const Container = styled.div`
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  align-items: end;
  padding-bottom: 2.8rem;
  justify-content: space-around;

  div p {
    font-size: 2rem;
  }

  div img {
    width: 2.6rem;
  }

  .order-counter {
    position: relative;
    span {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      padding: 0.1rem 0.6rem;
      border-radius: 100%;
      position: absolute;
      right: -0.4rem;
      top: -0.6rem;
    }
  }
`;
