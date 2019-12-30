import axios from 'axios'

let token = null

const baseUrl ="/api/notes"

const setToken = newToken => {
  token = `bearer ${newToken}`
  console.log(token)
}

export const loadUserNotes = async (id) => {
  const response = await axios.get(`/api/users/user/${id}/notes`)
  console.log('User data: ', response.data)
  return response.data
}

export const addNote = async ({content, userId, headerAuth}) => {
  console.log("addNote =>  sending data to server: ")
  console.log(`noteText :   ${content}`)
  console.log(`userId :     ${userId}`)
  console.log(`token :      ${headerAuth}`)

  const config = {
    headers: {Authorization: `Bearer ${headerAuth}`}
  }

  const bodyParams = {
    content: content,
    userId: userId
  }

  const response = await axios.post(baseUrl,bodyParams,config)
  console.log(response.data)
  return response.data
}

export const deleteNote = async ({noteId, headerAuth}) => {
  console.log("deleteNote => sending delete req. to server: ")
  console.log(`note id :    ${noteId}`)
  console.log(`token :    ${headerAuth}`)

  const config = {
    headers: {Authorization: `Bearer ${headerAuth}`}
  }

  const url = `${baseUrl}/${noteId}`
  const response = await axios.delete(url, config)
  console.log(response.data)
  return response.data
}

export default {setToken}


//'/user/:id/notes'
