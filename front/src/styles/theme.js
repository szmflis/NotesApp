import colors from './colors'
import typography from './typography'
import layout from './layout'
import buttons from './variants/buttons'

export const theme = {
  colors,
  ...typography,
  ...layout,
  buttons
}
