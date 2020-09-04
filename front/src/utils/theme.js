import { keyframes } from 'styled-components'
import { fadeIn, fadeInDown } from 'react-animations'

const fadeInAnim = keyframes`${fadeIn}`
const fadeInDownAnim = keyframes`${fadeInDown}`

export const theme = {
  colors: {
    black: '#081719',
    white: '#f0f0f5',
    grey: '#c8c8c8',
    darkGrey: '#4d4d4d',
    primary: '#1148B4',
    primaryLight: '#537BCB',
    primaryLightExtra: '#7C9CDC',
    primaryDark: '#0C3585',
    background: '#3462BD',
    disabled: '#dcdcdc',
  },
  fontSizeBase: '62.5%',
  fontSizeBaseRem: '1.4rem',
  fontColorBase: '#081719',
  fontWeight: {
    thin: 300,
    regular: 400,
    bold: 800,
  },
  fontSize: {
    small: '1.25rem',
    normal: '1.5rem',
    big: '2rem',
    bigger: '2.5rem',
    huge: '3rem'
  },
  radii: [0, 5, 10, 15],
  spaces: [0, 2, 4, 6, 8, 16, 32, 64, 128],
  sizes: [0, 20, 40, 60, 100, 160, 240, 360, 800],
  animations: {
    fadeIn: fadeInAnim,
    fadeInDown: fadeInDownAnim,
  }
}
