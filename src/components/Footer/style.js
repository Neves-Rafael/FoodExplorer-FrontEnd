import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font-size: 1.2rem;
  }

  > div {
    filter: contrast(0);
    p {
      font-size: 1.6rem;
    }

    img {
      width: 2.2rem;
    }
  }
`;
