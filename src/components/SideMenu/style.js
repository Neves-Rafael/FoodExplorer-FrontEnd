import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  z-index: 99;
  display: none;

  &[data-menu-is-open="true"] {
    display: block;
  }

  input {
    padding-right: 2rem;
  }

  footer {
    position: absolute;
    bottom: 0;

    > p {
      width: 12rem;
      font-size: 1.2rem;
      font-family: "Poppins";

      @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.SMALL_G}) {
        width: auto;
      }
    }
  }

  div:nth-child(2) {
    display: flex;

    div:nth-child(2) {
      display: none;
    }

    div:nth-child(1):has(:focus) + div:nth-child(2),
    div:nth-child(2):has(:hover) {
      margin-top: 0;
      display: flex;
    }

    width: calc(100% - 6rem);
    margin: 3rem 0 0 3rem;
  }

  .option {
    font-size: 2.4rem;
    font-family: "Poppins";
    margin-left: 4rem;
    margin-top: 4.6rem;
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      height: 2px;
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      width: calc(100% - 2rem);
      margin: 1rem 0 0 -1rem;
    }
  }
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: end;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  height: 11.4rem;
  cursor: pointer;

  div {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 2.2rem;
    padding: 0 0 2rem 2rem;
  }
`;
