import styled from "styled-components";

export const Container = styled.div`
  main{
    min-height: calc(100dvh - 200px);
    padding: 4rem 2rem;
  }
`;

export const AboutUs = styled.div`
  text-align: center;
  position: relative;

  h3, p, span{
    font-family: "Poppins";
  }

  h3{
    font-weight: 600;
    font-size: 2rem;
    text-align: start;
    margin-bottom: 2rem;
    color: ${({theme}) => theme.COLORS.CARROT_100}
  }

  .title-text, span{
    font-size: 2.6rem;
    margin-bottom: 4rem;
  }

  span{
    text-decoration-line: underline;
    color: ${({theme}) => theme.COLORS.CAKE_200};
    cursor: pointer;
  }

  .description-text{
    word-spacing: 4px;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    margin-bottom: 4rem;
  }

  img{
    width: 100%;
    height: 25rem;
    object-fit: cover;
    margin-bottom: 6rem;
  }

`;

export const OpenHour = styled.div`
  h3, p{
    font-family: "Poppins";
  }

  span{
    color: ${({theme}) => theme.COLORS.CARROT_100};
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
  }

  h3{
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  .hour-schema{
    margin: 2rem 0;
  }

  .open-hour div{
    display: flex;
    justify-content: space-between;
  }

`;

export const SocialMedia = styled.div`
  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  border-radius: 8px;
  width: 100%;
  padding: 1rem;
  margin: 4rem 0;
`;