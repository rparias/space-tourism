import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* ------------------- */
  /* Reset               */
  /* ------------------- */

  /* https://piccalil.li/blog/a-modern-css-reset/ */

  /* Box sizing */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Reset margins */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  figure,
  picture {
    margin: 0;
  }

  /* set up the body */
  body {
    line-height: 1.5;
    min-height: 100vh;
  }

  /* make images easier to work with */
  img,
  picutre {
    max-width: 100%;
    display: block;
  }

  /* make form elements easier to work with */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* remove animations for people who've turned them off */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

export default GlobalStyle
