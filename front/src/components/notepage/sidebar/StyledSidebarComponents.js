import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaTrash} from 'react-icons/fa'

export const StyledSidebar = styled.div`
  background: #C4C4C4;
  height: 100vh;
  grid-column: 1/2;

  display: grid;
  grid-template-columns: 100%;
  align-content: start;

  grid-template-rows: 5% 92% 3%;
`

export const TopOfSidebarUsername = styled(Link)`
  grid-row: 1/2;

  background: #424242;

  text-align: center;
  font-size: 1.6em;
  color: #FFFFFF;

  display: grid;
  justify-content: center;
  align-content: center;

  transition: background 0.1s;

  &:hover{
    background: #515151;
    color: #FFFFFF;
  }
`

export const SidebarNotesContainer = styled.div`
  grid-row: 2/3;

  display: grid;
  grid-template-columns: 100%;

  margin-top: 4px;

  overflow: hidden;

  align-content: start;
`

export const SingleNoteContainerSidebar = styled.li`
  color: #000000

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin: 10px;

  display: grid;
  gird-template-columns: 90% 10%;
`

export const SingleNoteTextSidebar = styled.div`
  grid-column: 1/2;

  color: #000000

  font-size: 1.6em;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

`

export const SidebarBottom = styled.div`
  background: #9E9E9E;

  display: grid;
  align-items: center;
  justify-items: center;

  font-size: 40px;

  min-height: 10px;

  transition: background 0.1s;

  &:hover{
    background: #8B8B8B;
  }
`

export const StyledTrashcan = styled(FaTrash)`
  grid-column: 2/3;
  font-size: 1.6em;
  align-self: center;
  justify-self: end;

  transition: color 0.3s;

  &:hover{
    color: #cf2727;
  }
`
