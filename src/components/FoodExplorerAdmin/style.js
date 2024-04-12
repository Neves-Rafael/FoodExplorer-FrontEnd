import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;

  > p {
    font-size: 3.8rem;
    font-weight: 700;
    transition: all 300ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.CAKE_200};

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
      position: absolute;
      right: 0;
      bottom: -1rem;
    }
  }
`;
