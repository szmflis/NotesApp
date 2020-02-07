import React from 'react'
import {StyledNotesFlexbox, SingleTileContainer, SingleTileText, SingleTileDate,
AddNoteTile, AddNoteTileTextField, AddNotePlusSign} from './StyledNotesGridComponents'
import {connect} from 'react-redux'
import moment from 'moment'
import {addNote} from '../../../services/notes'
import {addNoteRedux} from '../../../reducers/note-reducer'

const NotesGrid = (props) => {

  const handleNoteAdd = async (event) => {
    event.preventDefault()
    if (props.loggedUser.user == null){
      props.addNoteRedux({
        content: event.target.noteText.value
      })
    } else {
      try {
        const responseData = await addNote({
          content: event.target.noteText.value,
          userId: props.loggedUser.user.id,
          headerAuth: props.loggedUser.user.token
        })
        props.addNoteRedux(responseData)
      } catch (exception) {
        console.log(exception)
      }
    }
  }

  const conditionalRender = () => {
    return props.notes.map(noteObj => {
      return (
        <SingleTileContainer>
          <SingleTileText>{noteObj.content}</SingleTileText>
          <SingleTileDate>
            {moment(noteObj.date).format('MMM Do YYYY, h:mm:ss')}
          </SingleTileDate>
        </SingleTileContainer>
      )
    }
    )
  }

  

  return (
    <StyledNotesFlexbox>
      {conditionalRender()}

      <AddNoteTile onSubmit={handleNoteAdd}>
        <AddNoteTileTextField name="noteText"/>
        <AddNotePlusSign type="submit">add</AddNotePlusSign>
      </AddNoteTile>
    </StyledNotesFlexbox>
  )
}


const mapStateToProps = (state) =>{
  return{
    loggedUser: state.user,
    notes: state.notes
  }
}

const mapDispatchToProps = {
  addNoteRedux
}

export default connect(mapStateToProps,mapDispatchToProps)(NotesGrid)
