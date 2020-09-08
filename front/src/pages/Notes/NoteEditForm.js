import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { editNoteRedux } from '../../reducers/note-reducer'
import { P } from '../../components/P/P'
import { Textbox } from '../../components/Textbox/Textbox'
import { Button } from '../../components/Button/Button'
import { theme } from '../../styles/theme'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.lightGrey};
  padding: 5px;
  border-radius: 0px 0px 8px 8px;
`

const NoteEditForm = ({ content, setEditable, id }) => {
  const [currentContent, setCurrentContent] = useState(content)

  const dispatch = useDispatch()
  const loggedUser = useSelector(state => state.user)

  const handleNoteEdit = (event) => {
    event.preventDefault()
    setEditable(false)
    dispatch(editNoteRedux(id, currentContent, loggedUser.user.token))
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
    <StyledForm onSubmit={handleNoteEdit}>
      <Textbox
        value={currentContent}
        onChange={({ target }) => setCurrentContent(target.value)}
        width="90%"
      />
      <Button type="submit" margin="10px 5px">
        <P color={theme.colors.white} fontSize={theme.fontSize.normal}>
          save changes
        </P>
      </Button>
      {renderContentWarning()}
    </StyledForm>
  )
}

NoteEditForm.propTypes = {
  content: PropTypes.string.isRequired,
  setEditable: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default NoteEditForm
