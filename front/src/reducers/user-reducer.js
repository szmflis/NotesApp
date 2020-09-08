import loginService from '../services/login'
import noteService from '../services/notes'

const initialState = { user: null }

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.data
    default:
      return state
  }
}

export const setUser = (username, password) => {
  return async dispatch => {
    try {
      const user = await loginService.login({
        username, password
      })
      if (user) {
        dispatch({
          type: 'SET_USER',
          data: user
        })

        window.localStorage.setItem(
          'loggedUser', JSON.stringify(user)
        )
        noteService.setToken(user.token)
      }
    } catch (exception) {
      console.log(exception)
    }
  }
}

export const setUserFromMemory = (user) => {
  return {
    type: 'SET_USER',
    data: {
      user
    }
  }
}

export default userReducer
