import styled from 'styled-components'
import { theme } from '../../utils/theme'

export const Textbox = styled.textarea`
  border-radius: ${({ radius }) => radius || `${theme.spaces[4]}px`};
  border: ${({ border }) => border || `1px solid ${theme.colors.white}`};
  height: ${({ height }) => height || `${theme.sizes[5]}px`};
  width: ${({ width }) => width || '100%'};
  padding: ${({ padding }) => padding || `${theme.spaces[3]}px`};
  resize: none;

  &:focus {
    outline: none;
    border: ${({ borderOnFocus }) => borderOnFocus || `1px solid ${theme.colors.darkGrey}`};
  };
`
