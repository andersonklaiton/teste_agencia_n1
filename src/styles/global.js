import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
    }
    html, body {
        max-width: 100vw;
        min-height: 100vh;
    }
    button {
        cursor:pointer;
        background: none;
        border: none;
        :focus {
            outline: none;
        }
    }
    a {
        text-decoration:none;
    }
    svg,
	svg path {
        margin: 0;
    }
    :root {
        --pink:#E93A7D;
        --light-blue:#25DAC5;
        --blue:#4267B2;
        --red:#DC2532;
        --purple:#482BE7;
        --gray:#8F8F9F;
        --mediumblue:#482BE7;
        --barblue:#2F1893;
        --white: #FFFFFF;
        --black: #000000;
    }
`;