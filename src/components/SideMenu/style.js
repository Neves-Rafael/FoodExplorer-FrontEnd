import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  z-index: 1;

  div:nth-child(4) {
    position: absolute;
    bottom: 0;

    > p {
      font-size: 1.2rem;
      font-family: "Poppins";
    }
  }

  input {
    width: 90%;
    margin: 3rem 0 0 5%;
  }

  .leave {
    font-size: 3rem;
    font-family: "Poppins";
    margin-left: 8%;
    margin-top: 4.6rem;

    &::after {
      content: "";
      display: block;
      height: 2px;
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      width: 96%;
      margin: 1rem 0 0 -2%;
    }
  }

  .menu-header {
    display: flex;
    align-items: end;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    height: 11.4rem;

    div {
      display: flex;
      gap: 1rem;
      align-items: center;
      font-size: 2.2rem;
      padding-left: 2rem;
      padding-bottom: 2rem;
    }
  }
`;
