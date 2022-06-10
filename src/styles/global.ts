import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-text: '';
    --font-title: 'Montserrat', sans-serif;

    --color-main: #3A00C4;
    --color-main-alt: #5801E4;
    --color-highlight: #8AC400;
    --color-bg: #222;

    --color-border-dark: #151515;

    --color-linkedin: #004182;
    --color-linkedin-hover: #003071;
    --color-github: #2c3138;
    --color-github-hover: #1c2128;

    --color-white: #fff;
    --color-dark-gray: #444;

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
    /* font-family: var(--font-text); */
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
