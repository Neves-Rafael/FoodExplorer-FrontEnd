import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: solid 2px ${({ theme }) => theme.COLORS.DARK_300};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 2rem;

  width: 21rem;
  position: relative;
  border-radius: 8px;

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
  }

  .plate-description{
    display: none;
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  button {
    width: 160px;
    height: 3.2rem;
  }

  .plate-count{
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .favorite-edit {
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    font-size: 2.6rem;
  }

  .value {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 2rem;
  }

  @media(min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}){
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

    .plate-description{
      display: block;
    }

    .value{
      font-size: 3.2rem;
      line-height: 160%;
    }

    .plate-count{
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
