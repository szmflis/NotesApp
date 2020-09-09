import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { P } from '../../components/P/P'
import { Button } from '../../components/Button/Button'
import { theme } from '../../styles/theme'
import { setUser } from '../../reducers/user-reducer'
import { Input, InputWrapper } from '../../components/Input/Input'

const StyledWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
`

const Login = () => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = ({ username, password }) => {
    dispatch(setUser(username, password))
    history.push('/')
  }

  return (
    <StyledWrapper onSubmit={handleSubmit(handleLogin)}>
      <P fontSize={theme.fontSize.big}>Welcome Back!</P>
      <InputWrapper>
        <P>Username | email</P>
        <Input
          placeholder="...username"
          type="text"
          name="username"
          ref={register()}
        />
        {errors.username && <P color={theme.colors.danger}>{errors.username.message}</P>}
      </InputWrapper>
      <InputWrapper>
        <P>Password</P>
        <Input
          placeholder="...password"
          type="password"
          name="password"
          ref={register()}
        />
        {errors.password && <P color={theme.colors.danger}>{errors.password.message}</P>}
      </InputWrapper>
      <Button variant="primary" type="submit" margin="20px 0px">
        <P color={theme.colors.white} fontSize={theme.fontSize.big}>
          Log In!
        </P>
      </Button>
    </StyledWrapper>
  )
}

export default Login
