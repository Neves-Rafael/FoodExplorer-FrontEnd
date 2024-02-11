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
        filter: brightness(0.9);
    }    
`;

//     /* Estilos para navegadores WebKit (Chrome, Safari) */
// ::-webkit-scrollbar {
//   width: 10px; /* largura da barra de rolagem */
// }

// ::-webkit-scrollbar-thumb {
//   background-color: ${({ theme }) => theme.COLORS.DARK_900}; /* cor da alça da barra de rolagem */
//   border-radius: 6px; /* bordas arredondadas da alça da barra de rolagem */
// }

// ::-webkit-scrollbar-track {
//   background-color: #808080; /* cor de fundo da barra de rolagem */
// }

// /* Estilos para navegadores Firefox */
// scrollbar {
//   width: 6px; /* largura da barra de rolagem */
// }

// scrollbar-thumb {
//   background-color: ${({ theme }) => theme.COLORS.DARK_900};; /* cor da alça da barra de rolagem */
//   border-radius: 6px; /* bordas arredondadas da alça da barra de rolagem */
// }

// scrollbar-track {
//   background-color: #808080; /* cor de fundo da barra de rolagem */
// }
