import { createGlobalStyle } from 'styled-components'
import fonts from './fonts'
import variables from './variables'
import TransitionStyles from './TransitionStyles'

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--lightest-purple);
    color: var(--lightest-slate);
  }

  /* Provide basic, default focus styles.*/
  :focus {
    outline: 2px dashed var(--pink);
    outline-offset: 3px;
  }

  /*
    Remove default focus styles for mouse users ONLY if
    :focus-visible is supported on this platform.
  */
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }

  /*
    Optionally: If :focus-visible is supported on this
    platform, provide enhanced focus styles for keyboard
    focus.
  */
  :focus-visible {
    outline: 2px dashed var(--pink);
    outline-offset: 3px;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--purple);
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: var(--purple);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--dark-slate);
    border: 3px solid var(--purple);
    border-radius: 10px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--darkest-purple);
    color: var(--slate);
    font-family: var(--font-body);
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-family: var(--font-heading);
    font-weight: 500;
    color: var(--lightest-slate);
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    color: var(--green);
    font-size: clamp(var(--fz-heading-xl), 10vw, var(--fz-heading-xxxxl))
  }

  .medium-heading {
    margin: 0;
    color: var(--pink);
    font-size: clamp(var(--fz-heading-sm), 3vw, var(--fz-heading-xxl))
  }

  .section-heading {
    // display: flex;
    // align-items: center;
    // position: relative;
    margin: 10px 0 0;
    width: 100%;
    font-size: clamp(var(--fz-heading-sm), 3vw, var(--fz-heading-xxl));
    font-family: var(--font-label);
    color: var(--green);
    white-space: nowrap;
  }

  .section-heading-right {
    justify-content: flex-end;

    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  }

  .section-heading-underline {
    width: 200px;
    border-top: 3px solid var(--pink);
    border-radius: 5px;
    margin: 10px 30px 30px 30px;
  }

  .section-heading-center {
    width: 350px;

    @media (max-width: 768px) {
      width: 250px;
    }
  }

  img,
  svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;

    border-radius: 5px;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;

    &.feather {
      fill: none;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--pink);
    }

    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;
    font-family: var(--font-body);
    font-size: clamp(var(--fz-md), 2vw, var(--fz-xl));

    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    // & > a {
    //   ${({ theme }) => theme.mixins.inlineLink};
    // }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz-lg);
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '›';
          position: absolute;
          left: 0;
          color: var(--green);
        }
      }
    }
  }

  blockquote {
    border-left-color: var(--green);
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    background-color: var(--lightest-purple);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  #logo {
    color: var(--green);
  }

  .overline {
    color: var(--green);
    font-family: var(--font-label);
    font-size: var(--fz-md);
    font-weight: 400;
  }

  .subtitle {
    color: var(--green);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-heading);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      line-height: 1.5;
    }
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  .react-modal-responsive {
    max-width: 60%;
    margin: 5% auto;
    padding: 40px;
    bottom: auto;
    position: relative;
    border: 0;
    background-color: var(--purple);

    @media (max-width: 768px) {
      max-width: 100%;
      margin: 20% 0 0 0;
      min-height: 90%;
    }

    @media (max-width: 480px) {
      padding: 20px;
    }
  }

  ${TransitionStyles};

`

export default GlobalStyle
