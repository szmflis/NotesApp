const noteReducer = (state = [], action) => {
  console.log("Note reducer got state and action: ")
  console.log("State:     ",state)
  console.log("Action:    ",action)
  switch(action.type) {
    case 'INIT_NOTES':
      console.log("Note reducer in INIT_NOTES handler")
      console.log("Got data: ", action.data)
      return action.data
    case 'ADD_NOTE':
      return state.concat(action.data)
    case `DEL_NOTE`:
      return state.filter(noteObj => noteObj.id !== action.data)
    default:
      return state
  }
}

export const initializeNotes = (notesArray) => {
  return {
    type: 'INIT_NOTES',
    data: notesArray
  }
}

export const addNoteRedux = (note) => {
  return {
    type: 'ADD_NOTE',
    data: note
  }
}

export const deleteNoteRedux = (id) => {
  return {
    type: 'DEL_NOTE',
    data: id
  }
}


export default noteReducer
