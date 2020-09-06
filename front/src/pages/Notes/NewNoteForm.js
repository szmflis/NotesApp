import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { addNoteRedux } from '../../reducers/note-reducer'
import { Button } from '../../components/Button/Button'
import { P } from '../../components/P/P'
import { Textbox } from '../../components/Textbox/Textbox'
import { theme } from '../../utils/theme'

const StyledWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const StyledButton = styled(Button)`
  width: 100%;
`

const NewNoteForm = () => {
  const loggedUser = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleNoteAdd = async (event) => {
    event.preventDefault()

    if (loggedUser.user == null) {
      dispatch(addNoteRedux({
        content: event.target.noteText.value,
        date: new Date(),
        id: event.target.noteText.value
      }))
    } else {
      dispatch(addNoteRedux({
        content: event.target.noteText.value,
        userId: loggedUser.user.id,
        auth: loggedUser.user.token
      }))
    }
  }

  return (
    <StyledWrapper onSubmit={handleNoteAdd}>
      <Textbox name="noteText" placeholder="New note text"></Textbox>
      <StyledButton type="submit">
        <P color={theme.colors.white} fontSize={theme.fontSize.normal}>
          add note
        </P>
      </StyledButton>
    </StyledWrapper>
  )
}

export default NewNoteForm
