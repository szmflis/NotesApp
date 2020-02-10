import React from 'react'
import {connect} from 'react-redux'
import  {
  StyledSidebar,
  TopOfSidebarUsername,
  SidebarNotesContainer,
  SingleNoteContainerSidebar,
  SingleNoteTextSidebar,
  StyledTrashcan
} from './StyledSidebarComponents'
import {deleteNoteRedux} from '../../../reducers/note-reducer'
import {deleteNote} from '../../../services/notes'


const Sidebar = (props) => {

  const conditionalNotesRender = () => {
    if (props.loggedUser.user === null){
      return (
        <p style={{fontSize: 20}}>Notes will not be saved unless You are logged in.</p>
      )
    } else {
      return (
        <SidebarNotesContainer>
          {props.notes.map(note =>
            <SingleNoteContainerSidebar>
              <SingleNoteTextSidebar>{note.content}</SingleNoteTextSidebar>
              <StyledTrashcan onClick={() => handleNoteDel(note.id)}/>
            </SingleNoteContainerSidebar>)}
        </SidebarNotesContainer>
      )
    }
  }

  const handleNoteDel = async (id) => {
    try {
      const responseData = await deleteNote({
        noteId: id,
        headerAuth: props.loggedUser.user.token
      })
      console.log(responseData)
      props.deleteNoteRedux(id)
    } catch (exception) {
      console.log(exception)
    }

  }

  const conditionalUsernameRender = () => {
    if (props.loggedUser.user === null) {
      return (
        <TopOfSidebarUsername to="/login">
          Log In
        </TopOfSidebarUsername>
      )
    } else {
      return (
        <TopOfSidebarUsername to="/account">
          <p>{props.loggedUser.user.name}</p>
        </TopOfSidebarUsername>
      )
    }
  }

  return (
    <StyledSidebar>
      {conditionalUsernameRender()}
      {conditionalNotesRender()}
    </StyledSidebar>
  )
}


const mapStateToProps = (state) =>{
  return{
    loggedUser: state.user,
    notes: state.notes
  }
}

const mapDispatchToProps = {
  deleteNoteRedux
}

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)
