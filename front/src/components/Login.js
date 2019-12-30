import React, {useState}from 'react'
import loginService from '../services/login'
import {connect}from 'react-redux'
import noteService from '../services/notes'
import {setUser}from '../reducers/user-reducer'
import {withRouter}from 'react-router-dom'

const Login = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async(event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
          'loggedUser', JSON.stringify(user)
        )
        // console.log(user)

      noteService.setToken(user.token)
      props.setUser(user)
      setUsername('')
      setPassword('')
      props.history.push('/')
    } catch(exception) {
      console.log(exception)
    }
  }


  return(
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({target}) => setUsername(target.value)}
          />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({target}) => setPassword(target.value)}
          />
      </div>
      <button type="submit">login</button>
    </form>
  )
}

const mapDispatchToProps = {
  setUser
}


export default withRouter(connect(null, mapDispatchToProps)(Login))
