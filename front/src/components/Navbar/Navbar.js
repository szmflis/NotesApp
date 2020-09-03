import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setUser } from '../../reducers/user-reducer'
import { initializeNotes } from '../../reducers/note-reducer'
import { theme } from '../../utils/theme'
import { P } from '../P/P'
import { Box } from '../Box/Box'
import { H3 } from '../H3/H3'

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #4d4d4d;
  padding: 15px 15px 8px 15px;
  width: 100%;
`

const NavElement = styled.a`
  cursor: pointer;
  color: ${theme.colors.white};
  padding-bottom: 7px;
  font-size: ${theme.fontSize.big};

  background: linear-gradient(0deg,blue,blue) bottom left no-repeat;
  background-size: 0px 3px;
  transition: 0.5s;
  font-weight: ${theme.fontWeight.bold};

  &:hover {
    color: ${theme.colors.white};
    background-size: 100% 3px;
    opacity: 1;
  }
`

const Navbar = (props) => {
  return (
    <StyledNavbar>
      <NavElement>LOGOPLACE</NavElement>
      <NavElement>Your Notes</NavElement>
      <NavElement>Signup</NavElement>
    </StyledNavbar>
  )
}

export default Navbar
