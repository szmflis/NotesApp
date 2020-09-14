import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

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
      if (loggedUser !== null) {
        const userData = await loadUserNotes(loggedUser.id)
        dispatch(initializeNotes(userData))
      }
    }
    if (notes.length === 0) {
      fetchData()
    }
  }, [dispatch, loggedUser, notes.length])

  return (
    <StyledWrapper
      initial="out"
      animate="in"
      exit="out"
      variants={theme.framerVar.fadeInOut}
      transition={theme.framerTrans.fastTrans}
    >
      <Box width="100rem" align="center">
        <P fontSize={theme.fontSize.bigger}>
          {loggedUser !== null
            ? `${loggedUser.name} ( ${notes.length} notes )`
            : 'unlogged user'}
        </P>
      </Box>
      <Box direction="row" justify="space-between" width="100rem" padding="0" margin="0" color={theme.colors.white}>
        <Box width="29rem" margin="0">
          <NewNoteForm />
        </Box>
        <Box width="70rem" margin="0" padding="0" color={theme.colors.white}>
          <AnimatePresence>
            {
              notes.map(note => <Note
                content={note.content}
                date={note.date}
                author={loggedUser !== null ? loggedUser.name : 'unlogged user'}
                key={note.id}
                id={note.id}
              />)
            }
          </AnimatePresence>
        </Box>
      </Box>
    </StyledWrapper>
  )
}

export default Notes