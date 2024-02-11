import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: solid 2px ${({ theme }) => theme.COLORS.DARK_300};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  width: 23rem;
  position: relative;

  img {
    width: 15rem;
    height: 15rem;
    margin-top: 2.4rem;
    margin-bottom: 1rem;
    object-fit: cover;
    background-color: red;
    border-radius: 100%;
  }

  button {
    margin: 2.4rem;
    width: 80%;
    height: 3.2rem;
  }

  .favorite {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 2.6rem;
  }
`;
