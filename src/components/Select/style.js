import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Placeholder = styled.div`
  background-color: blue;
  border-radius: 8px;

  > div {
    height: 4.8rem;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
  }

  button {
    background: none;
    opacity: 0.5;
  }
`;

export const Options = styled.li`
  background-color: red;
  max-height: 50rem;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;

  padding: 2rem 2rem;

  ul {
    cursor: pointer;
  }
`;
