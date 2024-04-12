import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  > svg {
    cursor: pointer;
    color: red;

    &:hover {
      line,
      circle {
        transition: all 300ms ease-in-out;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }
    }
  }

  span {
    font-size: 2rem;
  }

  > svg {
    font-size: 3rem;
  }
`;
