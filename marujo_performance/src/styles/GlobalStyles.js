import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    :root{
        --primary-color: #FBBA00;
        --primary-color-light:#FFCE48;
        --primary-color-dark: #654A00;

        --secundary-color: #4A1D4E;
        --secundary-color-light:#A75AAE;
        --secundary-color-dark: #310035;

        --text-color100: #2A153B;
        --text-color80: #564463;
        --text-color60: #80728A;
        --text-color40: #AAA1B1;
        --text-color20: #D5D0D8;
        --text-color0: #FFFFFF;
        
    }

    html {
        scroll-behavior: smooth;
    }

    *{
        font-family: "Space Grotesk", sans-serif;
        font-optical-sizing: auto;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        width: 100%;
        /* background: var(--primary-color); */
    };
`;