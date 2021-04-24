import {createGlobalStyle} from 'styled-components';
import {fontFamily, paletteColor} from "./variables";

export const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    font-weight: 300;
    padding: 0;
    margin: 0;
    background-color: ${paletteColor.backgroundColor};
    font-size: 1rem;
    width: 100%;
    height: 100%;
    -webkit-tap-highlight-color: transparent !important;
    // cursor: none !important;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: ${fontFamily};
    min-height: 100%;

    main {
      position: relative;
      height: 100vh;
    }

    .container {
      margin: 0 auto;
      max-width: 1920px;
    }

    a {
      &, &:hover {
        text-decoration: none;
        color: inherit;
        border-color: inherit;
      }

    }

    &, * {
      box-sizing: border-box;
    }

    @media (max-width: 600px) {
      font-size: .75rem;
    }
    @media (max-width: 768px) {
      font-size: .8rem;
    }

    @media (max-width: 992px) {
      font-size: .9rem;
    }
  }

  button,
  select,
  h1,
  h2,
  h3,
  h4,
  span,
  p,
  img,
  a {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }


  div {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  /* prefixed by https://autoprefixer.github.io (PostCSS: v7.0.26, autoprefixer: v9.7.3) */
  .ps__rail-y {
    .ps__thumb-y {
      border: solid 1px ${paletteColor.primaryColor};
      background-color: transparent;
      width: 10px;
      box-shadow: inset 0 0 3px ${paletteColor.primaryColor};
    }

    &:hover > .ps__thumb-y,
    &:focus > .ps__thumb-y,
    &.ps--clicking .ps__thumb-y {
      border: solid 1px ${paletteColor.primaryColor};
      background-color: transparent;
      width: 10px;
    }
  }

  .ps .ps__rail-x:hover,
  .ps .ps__rail-y:hover,
  .ps .ps__rail-x:focus,
  .ps .ps__rail-y:focus,
  .ps .ps__rail-x.ps--clicking,
  .ps .ps__rail-y.ps--clicking {
    background-color: transparent;
  }
`;
