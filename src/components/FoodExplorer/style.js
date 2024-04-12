import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > p {
    font-size: 3.8rem;
    font-weight: 700;
    transition: all 300ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }
`;
