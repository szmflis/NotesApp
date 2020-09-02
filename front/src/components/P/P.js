import styled from 'styled-components'
import { theme } from '../../utils/theme'

export const P = styled.p`
  font-size: ${({ fontSize }) => fontSize || theme.fontSize.normal};
  font-weight: ${({ fontWeight }) => fontWeight || theme.fontWeight.regular};
  color: ${({ color }) => color || theme.colors.black};
  padding: ${({ padding }) => padding || '3px 0px 3px 2px'};
  margin: ${({ margin }) => margin || 0};
  border-bottom: ${({ borderBottom }) => borderBottom};
`