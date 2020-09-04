import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUser } from '../../reducers/user-reducer'
import { initializeNotes } from '../../reducers/note-reducer'
import { theme } from '../../utils/theme'
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

const Navbar = (props) => {
  const handleLogout = (event) => {
    props.setUser(null)
    props.initializeNotes([])
    window.localStorage.removeItem('loggedUser')
  }

  return (
    <StyledNavbar>
      <NavElement as={Link} to="/">LOGOPLACE</NavElement>
      <NavElement as={Link} to="/notes" margin="0px 0px 0px 90px">Your Notes</NavElement>
      {
        props.loggedUser.user === null ? (
          <Box margin="0" padding="0" color="inherit" direction="row" width="auto">
            <NavElement as={Link} to="/login" margin="0px 15px 0px 15px">login</NavElement>
            <NavElement as={Link} to="/register" margin="0px 15px 0px 15px">signup</NavElement>
          </Box>
        ) : (
          <Box margin="0" padding="0" color="inherit" direction="row" width="auto">
            <NavElement as={Link} to="/account" margin="0px 15px 0px 15px">account</NavElement>
            <NavElement as={Link} to="/" margin="0px 15px 0px 15px" onClick={handleLogout}>logout</NavElement>
          </Box>
        )
      }
    </StyledNavbar>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedUser: state.user,
    notes: state.notes
  }
}

const mapDispatchToProps = {
  setUser,
  initializeNotes
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
