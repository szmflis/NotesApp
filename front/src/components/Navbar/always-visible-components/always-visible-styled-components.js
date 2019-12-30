import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Logo = styled(Link)`
  height: 100%;
  width: 100%;

  display: grid;
  align-items: center;
  justify-items: center;

  grid-column: 1/2;
  font-size: 1.5em;
  font-weight: 500;
  color: #FFFFFF;
`

export const Help = styled(Link)`
  height: 100%;
  width: 100%;

  display: grid;
  align-items: center;
  justify-items: center;

  grid-column: 2/3;
  font-size: 20px;
  font-weight: 600;
  color: #D6D6D6;
  transition: background 0.5s, color 0.5s;

  &:hover {
    background: #616161;
    color: #FDFDFD;
  }
`

export const Contact = styled(Link)`
  height: 100%;
  width: 100%;

  display: grid;
  align-items: center;
  justify-items: center;

  grid-column: 3/4;
  font-size: 20px;
  font-weight: 600;
  color: #D6D6D6;
  transition: background 0.5s, color 0.5s;

  &:hover {
    background: #202020;
    color: #FDFDFD;
  }
`

export const YourNotesContainer = styled.div`
  grid-column: 4/5;
  width: 100%;

  display: grid;
  align-items: center;
  justify-items: center;
`

export const YourNotesBox = styled(Link)`
  width: 208px;
  height: 42px;
  background: #00288F;
  border-radius: 8px;
  transition: width 0s, height 0s, background 0.5s;
  margin-bottom: 2px;

  display: grid;
  align-items: center;
  justify-items: center;

  &:hover {
    width: 209px;
    height: 43px;
    background: #000AFF;
  }
`


export const YourNotesText = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  color: #FFFFFF
  justify-self: center;
  align-self: center;
`
