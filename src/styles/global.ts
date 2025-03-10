import { createGlobalStyle } from 'styled-components'
import firaCode from '../assets/FiraCode-Regular.woff'

export const GlobalStyle = createGlobalStyle`
@font-face{
    font-family: 'FiraCode';
    src: url(${firaCode}) format('woff');
    font-weight: 400;
    font-style: normal;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.colors['base-background']};
        -webkit-font-smoothing: antialiased;
        color: ${(props) => props.theme.colors['base-text']};
    }
    body, input, textarea, button {
        font: 400 ${({ theme }) => theme.textSizes['text-text-m']} 'Nunito', sans-serif;
        line-height: 160%;
    }

    ul {
        list-style: none;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
    button {
        cursor: pointer;
    }
`
