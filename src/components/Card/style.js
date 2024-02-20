import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: solid 2px ${({ theme }) => theme.COLORS.DARK_300};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  width: 24rem;
  position: relative;

  img {
    width: 15rem;
    height: 15rem;
    margin-top: 2.4rem;
    margin-bottom: 1rem;
    object-fit: cover;
    border-radius: 100%;
  }

  div {
    margin-top: 1rem;
  }

  button {
    margin: 1.2rem 2.4rem 2.4rem;
    width: 80%;
    height: 3.2rem;
  }

  .favorite {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 2.6rem;
  }

  .value {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 2rem;
  }
`;
