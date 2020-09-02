import styled from 'styled-components'
import { theme } from '../../utils/theme'

export const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: ${({ width }) => width || `${theme.sizes[5]}px`};
  height: ${({ height }) => height || 'auto'};
  padding: 10px;
  margin: ${({ margin }) => margin || '10px 0px 10px 0px'};
  background: ${theme.colors.primary};
`
