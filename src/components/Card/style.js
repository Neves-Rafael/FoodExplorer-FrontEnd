import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: solid 2px ${({ theme }) => theme.COLORS.DARK_300};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  gap: 1.2rem;
  padding: 2rem;

  height: 100%;

  width: 21rem;
  position: relative;
  border-radius: 8px;

  transition: all 200ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK_500};
    filter: brightness(1.2);
  }

  img {
    width: 9rem;
    height: 9rem;
    object-fit: cover;
    border-radius: 100%;
    cursor: pointer;
  }

  .plate-name {
    font-family: "Poppins";
    display: flex;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
    max-width: 99%;
    overflow: hidden;
    text-transform: capitalize;
    text-align: center;

    > svg {
      min-width: 2rem;
    }
  }

  .plate-description {
    display: none;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    word-wrap: break-word;
    max-height: 5rem;
    overflow: hidden;
  }

  button {
    width: 160px;
    height: 3.2rem;
  }

  .plate-count {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .favorite-icon,
  .edit-icon {
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    font-size: 2.6rem;

    transition: all 200ms ease-in-out;
  }

  .favorite-icon {
    &:hover {
      path {
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
      }
    }
  }

  .edit-icon {
    &:hover {
      path {
        color: ${({ theme }) => theme.COLORS.CARROT_100};
      }
    }
  }

  .value {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    width: 30.4rem;

    img {
      width: 18rem;
      height: 18rem;
    }

    .plate-name {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;
    }

    .plate-description {
      display: block;
    }

    .value {
      font-size: 3.2rem;
      line-height: 160%;
    }

    .plate-count {
      flex-direction: row;
      gap: 1.6rem;
      margin-bottom: 1.2rem;
    }

    button {
      width: 92px;
      height: 4.8rem;
    }
  }
`;
