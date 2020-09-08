import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { pageFadeInOut } from '../../utils/motion'

import { loadUserNotes } from '../../services/notes'
import { initializeNotes } from '../../reducers/note-reducer'
import { Box } from '../../components/Box/Box'
import { P } from '../../components/P/P'
import { theme } from '../../styles/theme'
import Note from './Note'
import NewNoteForm from './NewNoteForm'

const StyledWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Notes = () => {
  const loggedUser = useSelector(state => state.user)
  const notes = useSelector(state => state.notes)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      if (loggedUser.user !== null) {
        const userData = await loadUserNotes(loggedUser.user.id)
        dispatch(initializeNotes(userData))
      }
    }
    fetchData()
  }, [loggedUser])

  return (
    <StyledWrapper initial="out" animate="in" exit="out" variants={pageFadeInOut}>
      <Box width="100rem" align="center">
        <P fontSize={theme.fontSize.bigger}>
          {loggedUser.user !== null ? loggedUser.user.name : 'unlogged user'}
        </P>
      </Box>
      <Box direction="row" justify="space-between" width="100rem" padding="0" margin="0" color={theme.colors.white}>
        <Box width="29rem" margin="0">
          <NewNoteForm />
        </Box>
        <Box width="70rem" margin="0" padding="0" color={theme.colors.white}>
          {
              notes !== null || undefined ? (
                notes.map(note => <Note
                  content={note.content}
                  date={note.date}
                  author={loggedUser.user !== null ? loggedUser.user.name : 'unlogged user'}
                  key={note.id}
                  id={note.id}
                />)
              ) : (
                console.log('Notes not found')
                // TODO make error component
              )
          }
        </Box>
      </Box>
    </StyledWrapper>
  )
}

export default Notes
