import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

import { deleteNoteRedux, deleteNoteUnloggedUser } from '../../reducers/note-reducer'
import { theme } from '../../styles/theme'
import { P } from '../../components/P/P'
import NoteEditForm from './NoteEditForm'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70rem;
  border-radius: ${theme.spaces[4]}px;
  margin-bottom: ${theme.spaces[4]}px;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.colors.black};
  border-radius: 8px 8px 0px 0px ;
  padding: 0px 5px 0px 5px;
`

const StyledContent = styled.div`
  padding: ${theme.spaces[3]}px;
  background: ${theme.colors.yellow};
  border-radius: 0px 0px 8px 8px;
  word-wrap: break-word;
  height: auto;
`

const StyledBinIcon = styled(FaTrash)`
  color: ${theme.colors.lightGrey};
  height: 18px;
  width: 18px;
  transition: color 0.3s;

  &:hover {
    cursor: pointer;
    color: ${theme.colors.primary};
  }
`

const StyledEditIcon = styled(FaEdit)`
  color: ${theme.colors.lightGrey};
  height: 18px;
  width: 18px;
  transition: color 0.3s;

  &:hover {
    cursor: pointer;
    color: ${theme.colors.primary};
  }
`

const Note = ({ content, date, author, id }) => {
  const [editable, setEditable] = useState(false)

  const dispatch = useDispatch()
  const loggedUser = useSelector(state => state.user)

  const handleNoteDelete = () => {
    if (loggedUser.user !== null) {
      dispatch(deleteNoteRedux(id, loggedUser.user.token))
    } else {
      dispatch(deleteNoteUnloggedUser(id))
    }
  }

  return (
    <StyledWrapper>
      <StyledHeader>
        <P color={theme.colors.white}>{author}</P>
        <StyledBinIcon onClick={() => handleNoteDelete()} />
        <StyledEditIcon onClick={() => setEditable(!editable)} />
        <P color={theme.colors.white}>
          {moment(date).format('MMM Do YYYY, h:mm:ss')}
        </P>
      </StyledHeader>
      {editable ? (
        <NoteEditForm content={content} setEditable={setEditable} id={id} />
      ) : (
        <StyledContent>{content}</StyledContent>
      )}
    </StyledWrapper>
  )
}

Note.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]).isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Note
