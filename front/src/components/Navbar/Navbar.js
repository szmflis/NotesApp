import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {setUser} from '../../reducers/user-reducer'

import {Logo, YourNotesBox, YourNotesText, YourNotesContainer}
from './always-visible-components/always-visible-styled-components'

import {LogIn, SignUp, YourAccount, Logout}
from './conditional-components/conditional-styled-components'

import {initializeNotes} from '../../reducers/note-reducer'
import { FaArrowDown } from 'react-icons/fa'

const Navbar = (props) => {

  const NavMain = styled.nav`
    background-color: #212121;
    width: 100%;
    height: 55px;
    display: grid;
    grid-template-columns: 15% 12% 12% 20% auto;
    grid-template-rows: 100%;
  `

  const NavRight = styled.div`
    grid-column: 6/7;
    display: grid;
    grid-template-columns: 20% auto auto;
    grid-template-rows: 100%;
  `

  const conditionalRender = () => {
    if (props.loggedUser.user === null) {
      return (
        <NavRight>
          <LogIn to='/login'>Log In</LogIn>
          <SignUp to='/register'>Sign Up</SignUp>
        </NavRight>
        )
    } else {
      return (
        <NavRight>
          <YourAccount to='/account'>Your Account</YourAccount>
          <Logout to='/' onClick={handleLogout}>Logout</Logout>
        </NavRight>
      )
    }
  }

  const handleLogout = (event) => {
    props.setUser(null)
    props.initializeNotes([])
    window.localStorage.removeItem('loggedUser')
  }

  return (
    <NavMain>
      <Logo to='/'>LOGOPLACE</Logo>
      <YourNotesContainer>
        <YourNotesBox to='/notes'><YourNotesText>Your Notes</YourNotesText></YourNotesBox>
      </YourNotesContainer>
      {conditionalRender()}
    </NavMain>
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
