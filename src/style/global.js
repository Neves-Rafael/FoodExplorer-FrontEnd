import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
      font-size: 62.5%;
    }
    
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    body {
      background-color: ${({ theme }) => theme.COLORS.DARK_400};

      &::-webkit-scrollbar {
        width: 12px;
      }

      &::-webkit-scrollbar-track {
        background: none; 
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
        border-radius: 20px; 
      }
    }

    a {
      text-decoration: none;
    }

    button, a {
      cursor: pointer;
      transition: filter 0.2s;
      border: none;
    }

    input {
      border: none;
    }

    button:hover, a:hover {
      transition: all 200ms ease-in-out;
      filter: brightness(1.3);
    }    

    .red, .green, .blue, .orange, .light-blue{
      height: .8rem;
      width: .8rem;
      border-radius: 100%;
    }

    .red{
      background-color: red;
    }

    .green{
      background-color: green;
    }

    .blue{
      background-color: blueviolet;
    }

    .orange{
      background-color: orange;
    }

    .light-blue{
      background-color: lightseagreen;
    }
`;
