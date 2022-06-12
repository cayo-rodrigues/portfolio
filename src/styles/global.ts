import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;

    --font-text: 'Roboto', sans-serif;
    --font-title: 'Montserrat', sans-serif;

    --color-main: #3A00C4;
    --color-main-alt: #5801E4;
    --color-highlight: #8AC400;
    --color-highlight-hover: #8AC400f0;
    --color-highlight-active: #8AC400d0;;
    --color-bg: #222;
    --color-bg-smooth: #262626;

    --color-border-dark: #151515;

    --color-linkedin: #004182;
    --color-linkedin-hover: #003071;
    --color-github: #2c3138;
    --color-github-hover: #1c2128;

    --color-white: #fff;
    --color-off-white: #eee;
    --color-dark-gray: #444;
    --color-black: #000;

    --transition: all 0.25s ease-in-out;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    min-height: 100vh;
    height: 100%;
    background: #222;
  }

  li {
    list-style: none;
  }

  body, button, input, ::placeholder {
    font-family: var(--font-text);
    color: var(--color-white);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-title);
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-black);
    border-radius: 8px;
    border: 1px solid var(--color-border-dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-highlight);
    border-radius: 8px;
    border: 1px solid var(--color-border-dark);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-highlight-hover);
  }

  ::-webkit-scrollbar-thumb:active {
    background: var(--color-highlight-active);
  }
`

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  _4k: "2560px",
}

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes._4k})`,
}
