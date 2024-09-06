import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Open Sans", sans-serif;
    }

    #root {
        background-image: linear-gradient(#EBD2BE, #FFE8D4);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

`