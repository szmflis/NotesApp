import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import loginService from '../../services/login'
import noteService from '../../services/notes'
import { withRouter } from 'react-router-dom'
import { setUser } from '../../reducers/user-reducer'

const LoginPanel = (props) => {

    const handleLogin = async (event) => {
        event.preventDefault();

        const username = event.target.username.value
        const password = event.target.password.value

        try {
            const user = await loginService.login({
                username, password
            })

            window.localStorage.setItem(
                'loggedUser', JSON.stringify(user)
            )

            noteService.setToken(user.token)
            props.setUser(user)
            props.history.push('/')
        } catch (exception) {
            console.log(exception)
        }
    }

    const Container = styled.div`
        grid-column: 1/2;
        grid-row: 2/3;
        
        background-color: #f2f2f2;
    `

    const Header = styled.div`
        margin: 20px;
        text-align: center;
        font-size: 1.8em;
        color: #000000;
    `

    const Label = styled.div`
        margin: 10px;
        font-size: 1.5em;
        color: #000000;
    `

    const Input = styled.input`
        width: 90%;
        padding: 12px 20px;
        margin-left: 10px;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    `

    const ButtonRow = styled.div`
        display: flex;
        justify-content: center;
    `

    const SubmitButton = styled.button`
        border: 2px solid #111;
        padding: 10px 100px;
        background: transparent;
        margin: 20px;
        font-size: 2em;
        color: #000000;

        transition: background 0.5s

        &:hover{
            background: white;
        }
    `

    return (
        <Container>
            <Header>Please login</Header>
            <form onSubmit={handleLogin}>
                <Label>Username</Label>
                <Input 
                    name="username"
                    type="text"
                    />
                <Label>Password</Label>
                <Input 
                    name="password"
                    type="password"
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

export default withRouter(connect(null, mapDispatchToProps)(LoginPanel))