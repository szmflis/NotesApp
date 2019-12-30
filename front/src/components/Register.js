import React, {useState} from 'react'
import loginService from '../services/login'
import {connect} from 'react-redux'
import noteService from '../services/notes'
import {setUser} from '../reducers/user-reducer'
import {withRouter} from 'react-router-dom'
import registrationService from '../services/users'
const Register = (props) => {

  const [username , setUsername]  = useState('')
  const [password , setPassword]  = useState('')
  const [name     , setName]      = useState('')

  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      const responseData = await registrationService.register({
        username, password, name
      })
      console.log(responseData)

      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )

      noteService.setToken(user.token)
      props.setUser(user)
      setUsername('')
      setPassword('')
      setName('')
      props.history.push('/')
    } catch (exception) {
      console.log(exception.message)
    }
  }

  return (
    <form onSubmit={handleRegister}>
        username
        <input
          type="text"
          name="Username"
          value={username}
          onChange={({target}) => setUsername(target.value)}
        />
        password
        <input
          type="password"
          name="Password"
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />
        name
        <input
          type="text"
          name="Name"
          value={name}
          onChange={({target}) => setName(target.value)}
        />
        <button type="submit">submit</button>
    </form>
  )
}

const mapDispatchToProps = {
  setUser
}

export default withRouter(connect(null, mapDispatchToProps)(Register))
