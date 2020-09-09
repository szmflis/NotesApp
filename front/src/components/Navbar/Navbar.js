import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserFromMemory } from '../../reducers/user-reducer'
import { initializeNotes } from '../../reducers/note-reducer'
import { theme } from '../../styles/theme'
import { Box } from '../Box/Box'

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.darkGrey};
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

  margin: ${({ margin }) => margin};

  &:hover {
    color: ${theme.colors.white};
    background-size: 100% 3px;
    opacity: 1;
  }
`

const Navbar = () => {
  const loggedUser = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(setUserFromMemory(null))
    dispatch(initializeNotes([]))
    window.localStorage.removeItem('loggedUser')
  }

  return (
    <StyledNavbar>
      <NavElement as={Link} to="/">LOGOPLACE</NavElement>
      <NavElement as={Link} to="/notes">Your Notes</NavElement>
      {
        loggedUser === null ? (
          <NavElement as={Link} to="/logsign" margin="0px 15px 0px 15px">Sign</NavElement>
        ) : (
          <NavElement as={Link} to="/" margin="0px 15px 0px 15px" onClick={handleLogout}>Logout</NavElement>
        )
      }
    </StyledNavbar>
  )
}

export default Navbar
