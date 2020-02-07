import React, {useState}from 'react'
import loginService from '../../services/login'
import {connect}from 'react-redux'
import noteService from '../../services/notes'
import {setUser}from '../../reducers/user-reducer'
import {withRouter}from 'react-router-dom'
import {Container, Header, Input, Label, ButtonRow, SubmitButton} from './Login_styled_comp'

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
    <Container>
      <Header>Please login</Header>
      <form onSubmit={handleLogin}>
        <Label>Username</Label>
        <Input
          type="text"
          value={username}
          name="Username"
          onChange={({target}) => setUsername(target.value)}
        />
        
        <Label>Password</Label>
        <Input
          type="password"
          value={password}
          name="Password"
          onChange={({target}) => setPassword(target.value)}
        />
        <ButtonRow>
          <SubmitButton type="submit">
            login
          </SubmitButton>
        </ButtonRow>
      </form>
    </Container>
  )
}

const mapDispatchToProps = {
  setUser
}


export default withRouter(connect(null, mapDispatchToProps)(Login))
