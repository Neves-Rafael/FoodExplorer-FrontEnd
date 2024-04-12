import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font-size: 1.2rem;
    width: 12rem;
    font-family: "Poppins";

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.SMALL_G}) {
      width: auto;
    }
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

  @media (min-width: 800px) {
    justify-content: space-between;
    padding: 0 15%;
  }

  @media (min-width: 1250px) {
    justify-content: center;
    padding: 0;
    gap: 80rem;
  }
`;
