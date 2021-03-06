import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    color: #fff;
    max-width: 100vw;
    overflow-x: hidden;
}

button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    border: 3px solid #23d997;
    background: transparent;
    color: #fff;
    padding: 1rem 2rem;
    transition: all .5s ease;
    outline: none;

    &:hover {
        background:#23d997;
        color:#fff;
    }
}

img {
    width: 100%;
}

h2 {
    font-weight: lighter;
    font-size: 4rem;
}

h3 {
    color: #fff;
}

h4 {
    font-weight: bold;
    font-size: 2rem;
}

span {
    font-weight: bold;
    color: #23d997;
}

a {
    font-size: 1.1.rem;
    text-decoration: none;
    color: #fff;
}

p {
    padding: 1rem 0 3rem 0;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}

img {
    filter: grayscale(1);
}
`;

export default GlobalStyle;
