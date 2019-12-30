import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {loadUserNotes} from '../../services/notes'
import {initializeNotes, addNoteRedux} from '../../reducers/note-reducer'
import Sidebar from './sidebar/Sidebar'
import NotesGrid from './notesgrid/NotesGrid'
import styled from 'styled-components'

const Notes = (props) => {

  useEffect(() => {
    const fetchData = async() =>  {
      if (props.loggedUser.user !== null){
        console.log("im in useEffect")

        const userData = await loadUserNotes(props.loggedUser.user.id)
        console.log(userData)
        props.initializeNotes(userData)
    }}
    fetchData()
  }, [])

  const Container = styled.div`
    background: #424242;
    display: grid;
    grid-template-columns: minmax(200px, 16%) auto;
  `

  return(
    <Container>
      <Sidebar />
      <NotesGrid />
    </Container>
  )
}

const mapStateToProps = (state) =>{
  return{
    loggedUser: state.user,
    notes: state.notes
  }
}

const mapDispatchToProps = {
  initializeNotes,
  addNoteRedux
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
