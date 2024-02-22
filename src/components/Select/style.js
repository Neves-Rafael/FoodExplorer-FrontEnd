import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Placeholder = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 8px;

  > div {
    height: 4.8rem;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;

    span {
      cursor: pointer;
      rotate: ${({ $isOpen }) => ($isOpen ? "180deg" : "0deg")};
      transition: rotate 0.3s ease-in-out;
    }
  }

  button {
    background: none;
    opacity: 0.5;
  }
`;

export const Options = styled.li`
  max-height: 50rem;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  overflow-y: auto;

  ul {
    padding: 1rem 2rem;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      border-radius: 8px;
    }
  }
`;
