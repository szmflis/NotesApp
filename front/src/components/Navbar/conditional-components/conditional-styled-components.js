import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LogIn = styled(Link)`
  height: 100%;
  width: 100%;

  display: grid;
  align-items: center;
  justify-items: center;

  grid-column: 2/3;
  font-size: 1.6em;
  font-weight: 600;
  color: #ffffff;
  transition: background 0.5s, color 0.5s;


  &:hover {
    background: #424242;
    color: #FDFDFD;
  }
`

export const SignUp = styled(Link)`
  height: 100%;
  width: 100%;

  display: grid;
  justify-items: center;
  align-items: center;

  grid-column: 3/4;
  font-size: 1.6em;
  font-weight: 600;
  color: #ffffff;
  transition: background 0.5s, color 0.5s;

  &:hover {
    background: #424242;
    color: #00F0FF;
  }

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const YourAccount = styled(Link)`
  height: 100%;
  width: 100%;

  display: grid;
  align-items: center;
  justify-items: center;

  grid-column: 2/3;
  font-size: 1.6em;
  font-weight: 600;
  color: #ffffff;
  transition: background 0.5s, color 0.5s;


  &:hover {
    background: #424242;
    color: #FDFDFD;
  }
`

export const Logout = styled(Link)`
  height: 100%;
  width: 100%;

  display: grid;
  align-items: center;
  justify-items: center;

  grid-column: 3/4;
  font-size: 1.6em;
  font-weight: 600;
  color: #ffffff;
  transition: background 0.5s, color 0.5s;


  &:hover {
    background: #424242;
    color: #FDFDFD;
  }
`
