import { createGlobalStyle } from "styled-components";
import moneyBackground from "./moneyBackground.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-image: url("${moneyBackground}");
        background-size: cover;
        background-repeat: no-repeat;
        font-family: 'Merriweather', serif;
    }
`;