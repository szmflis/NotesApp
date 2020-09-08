import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { addNoteRedux } from '../../reducers/note-reducer'
import { Button } from '../../components/Button/Button'
import { P } from '../../components/P/P'
import { Textbox } from '../../components/Textbox/Textbox'
import { theme } from '../../styles/theme'

const StyledWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const StyledButton = styled(Button)`
  width: 100%;
`

const NewNoteForm = () => {
  const [currentContent, setCurrentContent] = useState('')

  const loggedUser = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleNoteAdd = async (event) => {
    event.preventDefault()

    if (loggedUser.user == null) {
      dispatch(addNoteRedux({
        content: currentContent,
        date: new Date(),
      }))
    } else {
      dispatch(addNoteRedux({
        content: currentContent,
        userId: loggedUser.user.id,
        auth: loggedUser.user.token
      }))
    }

    setCurrentContent('')
  }

  const renderContentWarning = () => {
    if (currentContent.length < 5 && currentContent.length !== 0) {
      return (
        <P>Note has to be at least 5 letters long</P>
      )
    }
    if (currentContent.length > 1024) {
      return (
        <P>Note has to be under 1024 letters long</P>
      )
    }
    return null
  }

  return (
    <StyledWrapper onSubmit={handleNoteAdd}>
      <Textbox
        placeholder="New note text"
        value={currentContent}
        onChange={({ target }) => setCurrentContent(target.value)}
      >
      </Textbox>
      <StyledButton type="submit">
        <P color={theme.colors.white} fontSize={theme.fontSize.normal}>
          add note
        </P>
      </StyledButton>
      {renderContentWarning()}
    </StyledWrapper>
  )
}

export default NewNoteForm