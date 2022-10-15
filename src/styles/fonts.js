import { css } from 'styled-components'

import FiraCode from '@fonts/FiraCode/FiraCode-Light.ttf'
import Inter from '@fonts/Inter/Inter-Regular.ttf'
import Quicksand from '@fonts/Quicksand/Quicksand-Medium.ttf'

const firaCodeFontFace = `
  @font-face {
    font-family: 'Fira Code';
    src: url(${FiraCode}) format('truetype');
    font-weight: 300;
    font-style: 'normal';
    font-display: auto;
  }
`

const interFontFace = `
  @font-face {
    font-family: 'Inter';
    src: url(${Inter}) format('truetype');
    font-weight: 400;
    font-style: 'normal';
    font-display: auto;
  }
`

const quicksandFontFace = `
  @font-face {
    font-family: 'Quicksand';
    src: url(${Quicksand}) format('truetype');
    font-weight: 500;
    font-style: 'normal';
    font-display: auto;
  }
`
const Fonts = css`
  ${firaCodeFontFace + interFontFace + quicksandFontFace}
`

export default Fonts
