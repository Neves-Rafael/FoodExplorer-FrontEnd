import styled from "styled-components";

export const Container = styled.div`
  display: none;
  position: relative;

  div input::placeholder {
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: flex;
    flex: 1;
    max-width: 58rem;
  }
`;

export const SearchResult = styled.div`
  z-index: 10;
  width: 100%;
  padding: 2rem;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_700};
  position: absolute;
  top: 6rem;
  max-height: 20rem;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 2rem;

  &::-webkit-scrollbar {
    width: 0; //Largura da barra de rolagem
  }

  p {
    cursor: pointer;
    font-family: "Poppins";
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-transform: capitalize;

    &:hover {
      color: ${({ theme }) => theme.COLORS.CARROT_100};
    }

    &::after {
      content: "";
      display: block;
      height: 2px;
      margin-top: 5px;
      background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }
`;
